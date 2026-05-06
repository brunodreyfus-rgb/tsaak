const castes = [
  { key:'media', name:'Media', role:'Journalistes, producteurs, rédactions', href:'/media', icon:'◉', color:'#00D5FF', x:'14%', y:'30%', note:'Créer un Wanted, chercher un guest, envoyer un multi-message' },
  { key:'intermediaires', name:'Intermédiaire', role:'Bookeurs, trouveurs, agents', href:'/intermediaires', icon:'◇', color:'#FF2FD6', x:'28%', y:'70%', note:'Répondre aux Wanted, proposer des profils, suivre les deals' },
  { key:'talent', name:'Talent', role:'Experts, créateurs, speakers', href:'/talent', icon:'✦', color:'#7CFFB2', x:'72%', y:'30%', note:'Importer LinkedIn, valoriser ses médias, accepter les demandes' },
  { key:'organisation', name:'Organisation', role:'Marques, conférences, institutions', href:'/organisation', icon:'⬡', color:'#FF9B3D', x:'86%', y:'70%', note:'Composer panels, réserver, contractualiser' },
  { key:'communaute', name:'Communauté', role:'FanTsaak, curateurs, signaux faibles', href:'/communaute', icon:'✺', color:'#3B82FF', x:'50%', y:'86%', note:'Suivre, recommander, amplifier les talents' }
];

export default function Home(){
  return <main style={s.page}>
    <div style={s.bgOrbA}/><div style={s.bgOrbB}/><div style={s.scan}/>
    <section style={s.hero}>
      <div style={s.left}>
        <img src="/tsaak-logo.jpg" alt="TSAAK" style={s.logo}/>
        <p style={s.tagline}>easy matching ecosystem</p>
        <h1 style={s.title}>Le cockpit qui connecte les castes, les signaux et les opportunités média.</h1>
        <p style={s.sub}>TSAAK transforme la recherche de talents en un écosystème vivant : Wanted, Patchwork, inscriptions, scoring et collaboration multi-acteurs.</p>
        <div style={s.ctas}><a style={s.primary} href="/demo">Lancer le mode démo</a><a style={s.secondary} href="/media">Entrer comme Media</a></div>
        <div style={s.metrics}><Metric n="5" t="castes connectées"/><Metric n="50" t="talents demo"/><Metric n="3" t="modes de recherche"/></div>
      </div>
      <div style={s.network}>
        <svg style={s.lines} viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="50" y1="50" x2="14" y2="30"/><line x1="50" y1="50" x2="28" y2="70"/><line x1="50" y1="50" x2="72" y2="30"/><line x1="50" y1="50" x2="86" y2="70"/><line x1="50" y1="50" x2="50" y2="86"/>
          <path d="M14 30 C35 8, 62 8, 72 30"/><path d="M28 70 C45 98, 72 98, 86 70"/><path d="M14 30 C4 52, 10 73, 28 70"/><path d="M72 30 C96 42, 99 60, 86 70"/>
        </svg>
        <div style={s.core}><img src="/tsaak-logo.jpg" alt="TSAAK" style={{width:150, maxWidth:'70%'}}/><span>matching core</span></div>
        {castes.map(c=><a key={c.key} href={c.href} style={{...s.node,left:c.x,top:c.y,borderColor:c.color,boxShadow:`0 0 34px ${c.color}77`}}>
          <b style={{color:c.color}}>{c.icon}</b><strong>{c.name}</strong><small>{c.role}</small>
        </a>)}
      </div>
    </section>
    <section style={s.bottomGrid}>{castes.map(c=><a href={c.href} key={c.key} style={{...s.casteCard,borderColor:c.color,boxShadow:`0 0 24px ${c.color}22`}}><span style={{color:c.color}}>{c.icon} {c.name}</span><p>{c.note}</p></a>)}</section>
    <style jsx global>{`body{margin:0;background:#03040a} a{box-sizing:border-box}`}</style>
  </main>
}
function Metric({n,t}){return <div style={s.metric}><b>{n}</b><span>{t}</span></div>}
const s={
 page:{minHeight:'100vh',background:'#03040a',color:'white',fontFamily:'Inter,Arial,sans-serif',position:'relative',overflow:'hidden',padding:'34px clamp(18px,4vw,70px)'},
 bgOrbA:{position:'absolute',width:520,height:520,borderRadius:'50%',background:'radial-gradient(circle,#00D5FF33,transparent 65%)',left:-160,top:-170,filter:'blur(12px)'},
 bgOrbB:{position:'absolute',width:620,height:620,borderRadius:'50%',background:'radial-gradient(circle,#FF2FD633,transparent 65%)',right:-210,bottom:-210,filter:'blur(18px)'},
 scan:{position:'absolute',inset:0,background:'linear-gradient(transparent 96%,rgba(255,255,255,.035) 97%)',backgroundSize:'100% 18px',opacity:.35,pointerEvents:'none'},
 hero:{position:'relative',zIndex:1,display:'grid',gridTemplateColumns:'minmax(340px,0.9fr) minmax(520px,1.1fr)',gap:36,alignItems:'center',minHeight:'68vh'},
 left:{maxWidth:620}, logo:{width:230,maxWidth:'80%',filter:'drop-shadow(0 0 22px #00D5FF88)'}, tagline:{color:'#8CEEFF',letterSpacing:4,textTransform:'lowercase',fontSize:15},
 title:{fontSize:'clamp(38px,5.8vw,78px)',lineHeight:.95,margin:'18px 0',letterSpacing:-2}, sub:{color:'#B7C7D8',fontSize:18,lineHeight:1.6,maxWidth:570},
 ctas:{display:'flex',gap:14,flexWrap:'wrap',marginTop:28}, primary:{padding:'16px 22px',borderRadius:16,color:'#031018',background:'linear-gradient(90deg,#00D5FF,#7CFFB2)',textDecoration:'none',fontWeight:800}, secondary:{padding:'16px 22px',borderRadius:16,color:'white',border:'1px solid #ffffff33',background:'#ffffff0c',textDecoration:'none'},
 metrics:{display:'flex',gap:12,marginTop:30,flexWrap:'wrap'}, metric:{padding:'14px 18px',border:'1px solid #ffffff18',borderRadius:18,background:'#ffffff09',display:'grid'},
 network:{height:650,position:'relative',border:'1px solid #ffffff12',borderRadius:36,background:'radial-gradient(circle at 50% 45%,#10172f,#05060d 62%)',boxShadow:'inset 0 0 90px #00D5FF13'},
 lines:{position:'absolute',inset:0,width:'100%',height:'100%',stroke:'#7DEBFF88',strokeWidth:.22,fill:'none',filter:'drop-shadow(0 0 5px #00D5FF)'},
 core:{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)',width:250,height:250,borderRadius:'50%',display:'grid',placeItems:'center',textAlign:'center',border:'1px solid #ffffff24',background:'radial-gradient(circle,#0e1430,#03040a)',boxShadow:'0 0 70px #00D5FF55'},
 node:{position:'absolute',transform:'translate(-50%,-50%)',width:180,minHeight:118,padding:16,border:'1px solid',borderRadius:24,background:'rgba(5,7,18,.76)',backdropFilter:'blur(14px)',color:'white',textDecoration:'none',display:'grid',gap:6},
 bottomGrid:{position:'relative',zIndex:1,display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:14,marginTop:20},
 casteCard:{padding:20,border:'1px solid',borderRadius:22,background:'rgba(255,255,255,.055)',color:'white',textDecoration:'none'},
};
