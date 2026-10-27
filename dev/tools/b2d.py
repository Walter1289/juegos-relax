import subprocess,re,sys,os
ROOT=os.path.abspath(os.path.join(os.path.dirname(__file__),'..','..'))
DEST=sys.argv[1] if len(sys.argv)>1 else ROOT
SRC=ROOT+'/dev/src2d/cabana'
subprocess.run(['npx','esbuild',SRC+'/main.js','--bundle','--format=iife','--target=es2019','--minify','--outfile='+DEST+'/cabana/app.js','--log-level=warning'],check=True,cwd=ROOT+'/dev/rio3d-src')
t=open(SRC+'/template.html').read()

s=t.replace('<!--BUNDLE-->','<script src="app.js"></script>')
H='<!doctype html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n<meta name="apple-mobile-web-app-capable" content="yes">\n<meta name="mobile-web-app-capable" content="yes">\n<meta name="theme-color" content="#2b2d52">\n<link rel="manifest" href="../manifest.webmanifest">\n<link rel="apple-touch-icon" href="../icons/apple-touch-icon.png">\n'
FONT=re.compile(r'<link rel="preconnect"[^>]*>\n?|<link rel="stylesheet" href="https://fonts\.googleapis\.com[^>]*>\n?')
META='<meta name="description" content="%s">\n<meta property="og:type" content="website">\n<meta property="og:site_name" content="Tomoshibi">\n<meta property="og:title" content="%s">\n<meta property="og:description" content="%s">\n<meta property="og:image" content="https://walter1289.github.io/juegos-relax/icons/icon-512.png">\n<meta name="twitter:card" content="summary">\n<link rel="icon" href="../icons/icon-192.png">\n<link rel="stylesheet" href="../fonts/fonts.css">\n<script src="../shared/guard.js"></script>\n'
d='Limpia, repara y habita una cabaña en lo alto de la montaña. Sin puntaje ni tiempo.';tt='Cabaña del Acantilado · Tomoshibi'
SW='<script>if("serviceWorker"in navigator)navigator.serviceWorker.register("../sw.js").catch(function(){})</script>\n'
i=s.index('<header>')
head=FONT.sub('',s[:i]).replace('</title>','</title>\n',1)
head=head.replace('</title>\n','</title>\n'+META%(d,tt,d),1)
open(DEST+'/cabana/index.html','w').write(H+head+'</head>\n<body>\n'+s[i:]+'\n'+SW+'</body>\n</html>\n')
print('ok')
