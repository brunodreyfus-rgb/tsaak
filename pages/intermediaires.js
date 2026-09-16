import { page, card, button, ghost, colors, Badge, Progress, Masthead, Avatar } from '../components/RichDemoUI';

export default function Intermediaires(){
  const c = colors.intermediaire;
  return <main style={page('intermediaire')}>
    <Masthead active='castes'/>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:16,marginBottom:22}}>
      <div><Badge c={c}>CASTE INTERMÉDIAIRE</Badge><h1 style={{margin:'10px 0 4px'}}>Salut Nora 👋</h1><p style={{color:'#AAB3C5',margin:0}}>Bookeuse internationale — 5 Wanted cherchent des profils que tu pourrais proposer.</p></div>
      <Avatar big src='https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&auto=format&fit=crop' name='Nora Haddad' role='Bookeuse'/>
    </div>

    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:14,marginBottom:24}}>
      <Stat c={c} label='Wanted ouverts' value='5'/>
      <Stat c={c} label='Deals acceptés' value='2'/>
      <Stat c={colors.core} label='Commission cumulée' value='4 200 €'/>
      <Stat c={c} label='Guests en Mercato' value='3'/>
    </div>

    <h2>Business cases à tester depuis cette caste</h2>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))',gap:16,marginBottom:30}}>
      <Case c={c} href='/mercato' title='Mercato' text='Placez vos Guests, négociez les paliers 2K/4K/6K, suivez les signatures.'/>
      <Case c={colors.organisation} href='/contract' title='Contrat & paiement' text='Voyez votre commission passer de Pending à Paid après paiement.'/>
      <Case c={colors.talent} href='/talent-onboarding/intermediaire' title='Inviter un talent externe' text='Simulez l’invitation d’un profil non-inscrit.'/>
      <Case c={colors.core} href='/score-explained' title='Score TSAAK' text='Le score détermine la valeur de vos placements.'/>
    </div>

    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:22}}>
      <section style={card(c)}>
        <div style={{color:c,fontWeight:900,letterSpacing:2,fontSize:12}}>DEAL NETWORK</div>
        <h2 style={{fontSize:32,margin:'10px 0'}}>Sourcez plus vite. Proposez plus juste. Gagnez commission.</h2>
        <p style={{color:'#AAB3C5'}}>Répondez aux Wanted et Help Me avec vos talents ou invitez des profils externes.</p>
        <a href='/intermediaires/respond' style={button(c)}>Répondre à un Wanted</a>
      </section>
      <section style={card(c)}>
        <h3>Commission cockpit</h3>
        <Progress label='Commissions payables' value='42%' c={c}/>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          {['Wanted actifs · 4','Propositions · 9','Acceptés · 2','Commission · 4 200 €'].map(x=><div key={x} style={{padding:14,borderRadius:16,background:'rgba(255,255,255,.06)'}}><b>{x}</b></div>)}
        </div>
      </section>
    </div>
  </main>;
}
function Stat({c,label,value}){return <div style={{padding:18,borderRadius:18,background:'rgba(255,255,255,.05)',border:`1px solid ${c}44`}}><div style={{fontSize:12,color:'#94a3b8'}}>{label}</div><div style={{fontSize:28,fontWeight:900,color:c}}>{value}</div></div>;}
function Case({c,href,title,text}){return <a href={href} style={{...card(c),textDecoration:'none',color:'#fff'}}><Badge c={c}>{title}</Badge><p style={{color:'#C9D4E4',margin:'10px 0 0'}}>{text}</p></a>;}
