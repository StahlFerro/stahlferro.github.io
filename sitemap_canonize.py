from bs4 import BeautifulSoup

with open('dist/sitemap.xml', "w") as fobj:
    xml = fobj.read()

    soup = BeautifulSoup(xml, 'lxml')
    for url in soup.find_all("url"):
        loc = url.find('loc')
        canon_loc = f"{loc.text}/index.html"
        loctag = soup.new_tag('loc')
        loctag.string = canon_loc
        loc.replace_with(loctag)

    newxml = soup.prettify()
    fobj.write(newxml)
