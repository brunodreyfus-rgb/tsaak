export const colors = { media:'#00E5FF', talent:'#39FF88', intermediaire:'#FF4FD8', communaute:'#4D7CFF', organisation:'#FF9B3D', core:'#F6FF00' };

export function page(theme='media'){
  const c = colors[theme] || colors.media;
  return { minHeight:'100vh', color:'#F7FBFF', fontFamily:'Arial, sans-serif', padding:32, background:`radial-gradient(circle at 15% 10%, ${c}22, transparent 28%), radial-gradient(circle at 90% 0%, #F6FF0020, transparent 22%), linear-gradient(135deg,#02030A,#080B18 45%,#02030A)` };
}
export function nav(c=colors.media){ return <div style={{display:'flex',gap:12,alignItems:'center',marginBottom:28,flexWrap:'wrap'}}><a href='/' style={link(c)}>Home</a><a href='/demo' style={link(c)}>Mode démo</a><a href='/patchwork' style={link(c)}>Patchwork</a><a href='/talent-onboarding' style={link(c)}>Onboarding talent</a><a href='/score-explained' style={link(c)}>Score</a></div> }
export function link(c){return {color:'#fff',textDecoration:'none',padding:'10px 14px',border:`1px solid ${c}55`,borderRadius:999,background:'#ffffff08'}}
export function card(c=colors.media){return {border:`1px solid ${c}44`,background:'linear-gradient(180deg,#ffffff12,#ffffff06)',boxShadow:`0 0 36px ${c}18`,borderRadius:28,padding:24,backdropFilter:'blur(14px)'}}
export function button(c=colors.media){return {display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8,padding:'13px 18px',borderRadius:999,border:`1px solid ${c}`,background:`linear-gradient(135deg,${c}33,#ffffff10)`,color:'#fff',textDecoration:'none',boxShadow:`0 0 26px ${c}33`,fontWeight:800}}
export function ghost(c=colors.media){return {...button(c),background:'#ffffff08',boxShadow:'none'}}
export function TsaakMark({size=120}={}){return <img src='/tsaak-logo.jpg' alt='TSAAK' style={{width:size,maxWidth:'70vw',filter:'drop-shadow(0 0 20px rgba(246,255,0,.25))'}}/>}
export function Badge({children,c=colors.media}){return <span style={{fontSize:12,padding:'7px 10px',borderRadius:999,border:`1px solid ${c}66`,color:c,background:`${c}12`,fontWeight:800}}>{children}</span>}
export function Progress({label,value,c=colors.media}){return <div style={{margin:'14px 0'}}><div style={{display:'flex',justifyContent:'space-between',color:'#C9D4E4',fontSize:13}}><span>{label}</span><b>{value}</b></div><div style={{height:9,borderRadius:99,background:'#ffffff12',overflow:'hidden',marginTop:7}}><div style={{height:'100%',width:value,background:`linear-gradient(90deg,${c},#F6FF00)`,boxShadow:`0 0 18px ${c}`}}/></div></div>}
export function ProofCard({p,c=colors.media}){return <div style={{...card(c),padding:0,overflow:'hidden'}}><div style={{height:130,backgroundImage:`linear-gradient(180deg,transparent,#02030A), url(${p.thumbnail})`,backgroundSize:'cover',backgroundPosition:'center'}}/><div style={{padding:18}}><Badge c={c}>{p.icon} {p.type}</Badge><h3 style={{margin:'14px 0 6px'}}>{p.title}</h3><p style={{color:'#9FACBF',margin:0}}>{p.source} · {p.date}</p><p style={{color:c,fontWeight:800}}>{p.metric}</p><p style={{color:'#C9D4E4'}}>{p.note}</p></div></div>}

// ---- Extended kit (business-case simulations) --------------------------
import React, { useEffect, useRef, useState } from 'react';

export const BIZ_CASES = [
  { key:'linkedin', label:'Connexion LinkedIn', href:'/talent-onboarding/self', c:colors.talent, icon:'in' },
  { key:'contract', label:'Contrat & Paiement', href:'/contract', c:colors.organisation, icon:'€' },
  { key:'score', label:'Score TSAAK', href:'/score-explained', c:colors.core, icon:'◎' },
  { key:'mercato', label:'Mercato', href:'/mercato', c:colors.intermediaire, icon:'⇄' }
];

export function Masthead({active}){
  const links=[['/','Home'],['/demo','Démo'],...BIZ_CASES.map(b=>[b.href,b.label]),['/media','Castes']];
  return <div style={{display:'flex',flexWrap:'wrap',gap:10,alignItems:'center',maxWidth:1180,margin:'0 auto 26px',padding:'18px 0'}}>
    <a href='/' style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none',color:'#fff',marginRight:8}}><img src='/tsaak-logo.jpg' style={{width:40,filter:'drop-shadow(0 0 12px rgba(0,213,255,.6))'}}/><b style={{letterSpacing:2}}>TSAAK</b></a>
    {links.map(([href,label])=><a key={href} href={href} style={{textDecoration:'none',fontSize:13,fontWeight:700,padding:'9px 13px',borderRadius:999,color: (active&&label.toLowerCase().includes(active)) ? '#02040a' : '#cbd5e1', background: (active&&label.toLowerCase().includes(active)) ? 'linear-gradient(90deg,#00D5FF,#7CFFB2)' : 'rgba(255,255,255,.05)', border:'1px solid rgba(255,255,255,.1)'}}>{label}</a>)}
  </div>;
}

export function field(){return {width:'100%',padding:'14px 16px',borderRadius:14,background:'rgba(255,255,255,.06)',color:'#fff',border:'1px solid rgba(255,255,255,.14)',boxSizing:'border-box',fontSize:15,fontFamily:'inherit'};}
export function Field({label,children}){return <label style={{display:'grid',gap:7,fontSize:13,color:'#9FACBF'}}>{label}{children}</label>;}
export function Select({value,onChange,options,c=colors.media}){return <select value={value} onChange={e=>onChange(e.target.value)} style={{...field(),borderColor:c+'55'}}>{options.map(o=><option key={o} value={o} style={{color:'#000'}}>{o}</option>)}</select>;}

export function CountUp({value=0,duration=900,decimals=0,prefix='',suffix=''}){
  const [n,setN]=useState(0); const raf=useRef();
  useEffect(()=>{
    const start=performance.now(); const from=0; const to=Number(value)||0;
    function tick(t){ const p=Math.min(1,(t-start)/duration); const eased=1-Math.pow(1-p,3); setN(from+(to-from)*eased); if(p<1) raf.current=requestAnimationFrame(tick); else setN(to); }
    raf.current=requestAnimationFrame(tick);
    return ()=>cancelAnimationFrame(raf.current);
  },[value,duration]);
  return <span>{prefix}{n.toFixed(decimals)}{suffix}</span>;
}

export function Slider({label,value,onChange,min=0,max=100,c=colors.media,suffix='%'}){
  return <div style={{margin:'14px 0'}}>
    <div style={{display:'flex',justifyContent:'space-between',color:'#C9D4E4',fontSize:13,marginBottom:6}}><span>{label}</span><b style={{color:c}}>{value}{suffix}</b></div>
    <input type='range' min={min} max={max} value={value} onChange={e=>onChange(Number(e.target.value))} style={{width:'100%',accentColor:c}}/>
  </div>;
}

export function Toggle({on,onChange,c=colors.media,labelOn='ON',labelOff='OFF'}){
  return <span onClick={()=>onChange(!on)} style={{cursor:'pointer',display:'inline-flex',alignItems:'center',gap:8,padding:'8px 14px',borderRadius:999,border:`1px solid ${on?c:'rgba(255,255,255,.2)'}`,background:on?c+'22':'rgba(255,255,255,.05)',fontSize:12,fontWeight:800,color:on?c:'#94a3b8',userSelect:'none'}}>
    <span style={{width:10,height:10,borderRadius:99,background:on?c:'#475569',boxShadow:on?`0 0 10px ${c}`:'none'}}/>{on?labelOn:labelOff}
  </span>;
}

export function Countdown({to,c=colors.intermediaire}){
  const [left,setLeft]=useState(Math.max(0,to-Date.now()));
  useEffect(()=>{ const id=setInterval(()=>setLeft(Math.max(0,to-Date.now())),1000); return ()=>clearInterval(id); },[to]);
  const d=Math.floor(left/86400000), h=Math.floor(left/3600000)%24, m=Math.floor(left/60000)%60, s=Math.floor(left/1000)%60;
  const pad=n=>String(n).padStart(2,'0');
  return <div style={{display:'flex',gap:8}}>{[['J',d],['H',h],['M',m],['S',s]].map(([l,v])=><div key={l} style={{textAlign:'center',padding:'10px 14px',borderRadius:14,background:'rgba(255,255,255,.06)',border:`1px solid ${c}55`,minWidth:56}}><div style={{fontSize:22,fontWeight:900,color:c}}>{pad(v)}</div><div style={{fontSize:10,color:'#94a3b8',letterSpacing:2}}>{l}</div></div>)}</div>;
}

export function SignaturePad({name,onSign,signed,c=colors.talent}){
  const [val,setVal]=useState(name||'');
  if(signed) return <div style={{padding:'22px 18px',borderRadius:16,border:`1px solid ${c}`,background:c+'14'}}><div style={{fontFamily:'Georgia, "Brush Script MT", cursive',fontSize:34,color:c}}>{signed}</div><div style={{fontSize:12,color:'#94a3b8',marginTop:6}}>✓ Signé électroniquement · {new Date().toLocaleString('fr-FR')}</div></div>;
  return <div style={{padding:18,borderRadius:16,border:'1px dashed rgba(255,255,255,.25)',background:'rgba(255,255,255,.03)'}}>
    <div style={{fontSize:12,color:'#94a3b8',marginBottom:8}}>Zone de signature — tapez votre nom pour signer électroniquement</div>
    <input value={val} onChange={e=>setVal(e.target.value)} placeholder='Votre nom complet' style={{...field(),fontFamily:'Georgia, cursive',fontSize:22}}/>
    <button onClick={()=>val.trim() && onSign(val.trim())} style={{...button(c),marginTop:12,border:'none',cursor:'pointer'}}>Signer et valider le contrat</button>
  </div>;
}

export function Stepper({steps,active,c=colors.media}){
  return <div style={{display:'flex',gap:0,flexWrap:'wrap',marginBottom:26}}>{steps.map((s,i)=>{
    const state = i<active?'done':i===active?'active':'todo';
    return <div key={s} style={{display:'flex',alignItems:'center'}}>
      <div style={{display:'flex',alignItems:'center',gap:8,padding:'9px 14px',borderRadius:999,border:`1px solid ${state==='todo'?'rgba(255,255,255,.16)':c}`,background:state==='active'?c+'22':state==='done'?c+'11':'transparent',color:state==='todo'?'#5b6b82':'#fff',fontSize:13,fontWeight:800}}>
        <span style={{width:20,height:20,borderRadius:99,display:'grid',placeItems:'center',fontSize:11,background:state==='todo'?'rgba(255,255,255,.08)':c,color:state==='todo'?'#5b6b82':'#02040a'}}>{state==='done'?'✓':i+1}</span>{s}
      </div>{i<steps.length-1 && <span style={{width:22,height:1,background:'rgba(255,255,255,.18)'}}/>}
    </div>;
  })}</div>;
}

export function useLocal(key, initial){
  const [v,setV]=useState(initial);
  useEffect(()=>{ try{ const raw=typeof window!=='undefined' && window.localStorage.getItem(key); if(raw) setV(JSON.parse(raw)); }catch(e){} },[key]);
  useEffect(()=>{ try{ if(typeof window!=='undefined') window.localStorage.setItem(key, JSON.stringify(v)); }catch(e){} },[key,v]);
  return [v,setV];
}

export function euro(n){ return (Math.round(n*100)/100).toLocaleString('fr-FR',{minimumFractionDigits:2,maximumFractionDigits:2})+' €'; }

export function Avatar({src,name,role,big=false}){return <div style={{display:'flex',alignItems:'center',gap:14}}><img src={src} alt={name} style={{width:big?74:44,height:big?74:44,borderRadius:24,objectFit:'cover',border:'1px solid rgba(255,255,255,.18)'}}/><div><b>{name}</b>{role&&<div style={{color:'#94a3b8',fontSize:13}}>{role}</div>}</div></div>;}
