import { page, card, button, colors, Badge, Progress, Masthead, PERSONAS } from '../components/RichDemoUI';

export default function Talent(){
  const c = colors.talent;
  const me = PERSONAS.find(p=>p.key==='talent');
  return <main style={page('talent')}>
    <Masthead active='castes'/>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:16,marginBottom:22}}>
      <div><Badge c={c}>CASTE TALENT</Badge><h1 style={{margin:'10px 0 4px'}}>Salut {me.name} 👋</h1><p style={{color:'#AAB3C5',margin:0}}>{me.role} — LCI veut te contacter pour une intervention demain.</p></div>
      <img src={me.photo} style={{width:64,height:64,borderRadius:20,objectFit:'cover',border:`1px solid ${c}55`}}/>
    </div>

    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:14,marginBottom:24}}>
      <Stat c={c} label='Score TSAAK' value='94'/>
      <Stat c={c} label='Interventions' value='18'/>
      <Stat c={c} label='Contrats signés' value='7'/>
      <Stat c={colors.core} label='Revenus cumulés' value='18,4K€'/>
    </div>

    <h2>Business cases à tester depuis cette caste</h2>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))',gap:14,marginBottom:26}}>
      <Case c={c} href='/talent-onboarding/self' title='Connexion LinkedIn' text='Importez votre profil, laissez l’IA trouver vos preuves média.'/>
      <Case c={colors.organisation} href='/contract' title='Signer & être payé' text='Signature électronique puis paiement post-signature.'/>
      <Case c={colors.core} href='/score-explained' title='Comprendre mon score' text='Ajustez les curseurs, voyez le score évoluer en direct.'/>
      <Case c={colors.intermediaire} href='/mercato' title='Mercato' text='Recevez des offres de plusieurs médias.'/>
      <Case c={c} href='/messaging' title='Messagerie' text='Répondez aux demandes entrantes.'/>
      <Case c={colors.talent} href='/talent/sarah-benali' title='Mon profil' text='Voyez le profil enrichi tel qu’un média le voit.'/>
    </div>

    <section style={card(c)}>
      <div style={{color:c,fontWeight:900,letterSpacing:2,fontSize:12}}>DEMANDE ENTRANTE</div>
      <h2 style={{fontSize:28,margin:'8px 0'}}>France 24 — segment live sur IA & société</h2>
      <Progress label='Étape du deal' value='60%' c={c}/>
      <a href='/messaging' style={button(c)}>Accepter & répondre</a>
    </section>
  </main>;
}
function Stat({c,label,value}){return <div style={{padding:18,borderRadius:18,background:'rgba(255,255,255,.05)',border:`1px solid ${c}44`}}><div style={{fontSize:12,color:'#94a3b8'}}>{label}</div><div style={{fontSize:28,fontWeight:900,color:c}}>{value}</div></div>;}
function Case({c,href,title,text}){return <a href={href} style={{...card(c),textDecoration:'none',color:'#fff',padding:18}}><Badge c={c}>{title}</Badge><p style={{color:'#C9D4E4',margin:'8px 0 0',fontSize:13}}>{text}</p></a>;}
