import { page, card, button, ghost, colors, Badge, Progress, Masthead, Avatar } from '../components/RichDemoUI';

export default function Organisation(){
  const c = colors.organisation;
  return <main style={page('organisation')}>
    <Masthead active='castes'/>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:16,marginBottom:22}}>
      <div><Badge c={c}>CASTE ORGANISATION</Badge><h1 style={{margin:'10px 0 4px'}}>Salut Emma 👋</h1><p style={{color:'#AAB3C5',margin:0}}>Event Director · Global Forum — 3 panels peuvent être composés avec les talents shortlistés.</p></div>
      <Avatar big src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop' name='Emma Brooks' role='Event Director'/>
    </div>

    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:14,marginBottom:24}}>
      <Stat c={c} label='Briefs events' value='3'/>
      <Stat c={c} label='Contrats prêts' value='2'/>
      <Stat c={colors.core} label='Budget engagé' value='12 600 €'/>
      <Stat c={c} label='Speakers shortlistés' value='9'/>
    </div>

    <h2>Business cases à tester depuis cette caste</h2>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))',gap:16,marginBottom:30}}>
      <Case c={c} href='/contract' title='Contrat & paiement' text='Même tunnel que les Médias : contrat, signature, paiement.'/>
      <Case c={colors.talent} href='/proactive-search' title='Recherche proactive' text='Composez un panel selon vos critères (sujet, langue, dispo).'/>
      <Case c={colors.core} href='/score-explained' title='Score TSAAK' text='Évaluez la valeur média réelle de vos speakers.'/>
      <Case c={colors.intermediaire} href='/mercato' title='Mercato' text='Sécurisez un Guest en avance pour votre prochain événement.'/>
    </div>

    <section style={card(c)}>
      <div style={{color:c,fontWeight:900,letterSpacing:2,fontSize:12}}>ORGANISATION HUB</div>
      <h2 style={{fontSize:34,margin:'10px 0'}}>Réservez des experts pour vos événements et panels.</h2>
      <p style={{color:'#AAB3C5'}}>Même tunnel que Media : découverte, shortlist, contact, contrat, paiement, prestation.</p>
      <Progress label='Event brief · IA & démocratie' value='55%' c={c}/>
      <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
        <a style={button(c)} href='/proactive-search'>Créer un brief événement</a>
        <a style={ghost(c)} href='/search'>Chercher des speakers</a>
      </div>
    </section>
  </main>;
}
function Stat({c,label,value}){return <div style={{padding:18,borderRadius:18,background:'rgba(255,255,255,.05)',border:`1px solid ${c}44`}}><div style={{fontSize:12,color:'#94a3b8'}}>{label}</div><div style={{fontSize:28,fontWeight:900,color:c}}>{value}</div></div>;}
function Case({c,href,title,text}){return <a href={href} style={{...card(c),textDecoration:'none',color:'#fff'}}><Badge c={c}>{title}</Badge><p style={{color:'#C9D4E4',margin:'10px 0 0'}}>{text}</p></a>;}
