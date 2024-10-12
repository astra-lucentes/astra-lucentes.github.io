Remove-Item "..\astra-compiled\*"
Copy-Item -Path ".\out\*" -Destination "..\astra-compiled" -Recurse
New-Item "..\astra-compiled\.nojekyll" -type File