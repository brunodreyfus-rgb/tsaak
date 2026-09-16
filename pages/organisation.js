import { page, card, button, colors, Badge, Progress, Masthead, PERSONAS } from '../components/RichDemoUI';

export default function Organisation(){
  const c = colors.organisation;
  const me = PERSONAS.find(p=>p.key==='organisation');
  return <main style={page('organisation')}>
    <Masthead active='castes'/>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:16,marginBottom:22}}>
      <div><Badge c={c}>CASTE ORGANISATION</Badge><h1 style={{margin:'10px 0 4px'}}>Salut {me.name} 👋</h1><p style={{color:'#AAB3C5',margin:0}}>{me.role} — 3 panels peuvent être composés avec les talents shortlistés.</p></div>
      <img src={me.photo} style={{width:64,height:64,borderRadius:20,objectFit:'cover',border:`1px solid ${c}55`}}/>
    </div>

    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:14,marginBottom:24}}>
      <Stat c={c} label='Briefs events' value='3'/>
      <Stat c={c} label='Contrats prêts' value='2'/>
      <Stat c={colors.core} label='Budget engagé' value='12 600 €'/>
      <Stat c={c} label='Speakers shortlistés' value='9'/>
    </div>

    <h2>Business cases à tester depuis cette caste</h2>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))',gap:14,marginBottom:26}}>
      <Case c={c} href='/search' title='Recherche proactive' text='Composez un panel selon vos critères.'/>
      <Case c={colors.talent} href='/ai-search' title='Assistant IA' text='Décrivez votre événement, laissez l’IA proposer.'/>
      <Case c={colors.organisation} href='/contract' title='Contrat & paiement' text='Même tunnel que les Médias.'/>
      <Case c={colors.core} href='/score-explained' title='Score TSAAK' text='Évaluez la valeur média réelle de vos speakers.'/>
      <Case c={colors.intermediaire} href='/mercato' title='Mercato' text='Sécurisez un Guest en avance.'/>
    </div>

    <section style={card(c)}>
      <div style={{color:c,fontWeight:900,letterSpacing:2,fontSize:12}}>EVENT BRIEF EN COURS</div>
      <h2 style={{fontSize:28,margin:'8px 0'}}>Panel « IA & démocratie »</h2>
      <Progress label='Statut' value='55%' c={c}/>
      <a style={button(c)} href='/search'>Chercher des speakers</a>
    </section>
  </main>;
}
function Stat({c,label,value}){return <div style={{padding:18,borderRadius:18,background:'rgba(255,255,255,.05)',border:`1px solid ${c}44`}}><div style={{fontSize:12,color:'#94a3b8'}}>{label}</div><div style={{fontSize:28,fontWeight:900,color:c}}>{value}</div></div>;}
function Case({c,href,title,text}){return <a href={href} style={{...card(c),textDecoration:'none',color:'#fff',padding:18}}><Badge c={c}>{title}</Badge><p style={{color:'#C9D4E4',margin:'8px 0 0',fontSize:13}}>{text}</p></a>;}
