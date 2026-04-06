f_path = 'e:/Ankit_portfolio/static/js/main.f0c006f3.js'
with open(f_path, 'r', encoding='utf-8') as f:
    text = f.read()

old = 'onClick:e=>{e.preventDefault(),s(""===t),u(""===r),f(""===o)}'
new_code = 'onClick:e=>{e.preventDefault();const nE=(""===t),eE=(""===r),mE=(""===o);s(nE);u(eE);f(mE);if(!nE&&!eE&&!mE){fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:"YOUR_WEB3FORMS_KEY",name:t,email:r,message:o})}).then(res=>res.json()).then(res=>{if(res.success){alert("Message sent!");n("");a("");i("");}else{alert("Failed to send.")}}).catch(e=>{alert("Error sending.");})}}'

if old in text:
    with open(f_path, 'w', encoding='utf-8') as f:
        f.write(text.replace(old, new_code))
    print('SUCCESS')
else:
    print('NOT FOUND')
