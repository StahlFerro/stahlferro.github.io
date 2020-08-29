from pathlib import Path
import io
import os
import subprocess
import cv2
import click


gallery_dir = Path("../static/gallery-videos/").resolve()
out_dir = Path("../static/gallery-thumbs").resolve()
pngquant_path = Path("../bin/pngquant.exe").resolve()

size_suffixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']

def _read_filesize(nbytes: int) -> str:
    i = 0
    while nbytes >= 1024 and i < len(size_suffixes)-1:
        nbytes /= 1024.
        i += 1
    size = str(round(nbytes, 3)).rstrip('0').rstrip('.')
    return f"{size} {size_suffixes[i]}"

def _quantize_png(path: Path, quality: int):
    cmdlist = [str(pngquant_path), f"--quality={quality}", str(path), "--ext=.png", "--force"]
    cmd = ' '.join(cmdlist)
    subprocess.run(cmd, shell=True)
    return

def _generate_thumbnails(quality: int):
    if not Path.exists(gallery_dir):
        raise NotADirectoryError(f"Cannot find directory {gallery_dir}")
    if not Path.exists(out_dir):
        raise NotADirectoryError(f"Cannot find directory {out_dir}")
    
    gallery_collections = [d for d in Path(gallery_dir).glob("*") if Path.is_dir(d)]
    # for gc in gallery_collections:
    #     print(gc)
    for collection_dir in gallery_collections:
        print(f"Collection dir\n\t{collection_dir}")
        video_paths = [cd for cd in Path(collection_dir).glob("*")]

        thumbgroup_dir = Path.joinpath(out_dir, collection_dir.stem)
        if not os.path.exists(thumbgroup_dir):
            os.mkdir(thumbgroup_dir)
        print(f"Save dir\n\t{thumbgroup_dir}")
        for vidpath in video_paths:
            print(f"\t\t{vidpath}")
            video = cv2.VideoCapture(str(vidpath))
            retval, frame = video.read()
            fname = f"{vidpath.stem}.png"
            save_path = Path.joinpath(thumbgroup_dir, fname)
            cv2.imwrite(str(save_path), frame)
            
            if quality:
                _quantize_png(save_path, quality)

            print(f"\t\t[{_read_filesize(Path(save_path).stat().st_size)}] {save_path}")

            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
            video.release()
            cv2.destroyAllWindows()


@click.group()
def cli():
    pass

@cli.command()
@click.option("--quality", type=int)
def generate(quality):
    _generate_thumbnails(quality)


if __name__ == "__main__":
    cli()
