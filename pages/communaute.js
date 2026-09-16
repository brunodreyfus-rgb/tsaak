import { page, card, button, colors, Badge, Progress, Masthead, PERSONAS } from '../components/RichDemoUI';

export default function Communaute(){
  const c = colors.communaute;
  const me = PERSONAS.find(p=>p.key==='communaute');
  return <main style={page('communaute')}>
    <Masthead active='castes'/>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:16,marginBottom:22}}>
      <div><Badge c={c}>CASTE COMMUNAUTÉ</Badge><h1 style={{margin:'10px 0 4px'}}>Salut {me.name} 👋</h1><p style={{color:'#AAB3C5',margin:0}}>{me.role} — tes recommandations ont généré 6 nouveaux signaux cette semaine.</p></div>
      <img src={me.photo} style={{width:64,height:64,borderRadius:20,objectFit:'cover',border:`1px solid ${c}55`}}/>
    </div>

    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:14,marginBottom:24}}>
      <Stat c={c} label='Talents suivis' value='28'/>
      <Stat c={c} label='Recommandations utiles' value='6'/>
      <Stat c={colors.core} label='Indice FanTSAak' value='81%'/>
      <Stat c={c} label='Guests investis (Mercato)' value='2'/>
    </div>

    <h2>Business cases à tester depuis cette caste</h2>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))',gap:14,marginBottom:26}}>
      <Case c={colors.core} href='/score-explained' title='Score TSAAK' text='Voyez le poids exact de l’indice FanTSAak.'/>
      <Case c={colors.intermediaire} href='/mercato' title='Mercato' text='La Kaastbase peut investir jusqu’à 30%.'/>
      <Case c={colors.talent} href='/patchwork' title='Patchwork' text='Explorez les suggestions passives poussées aux médias.'/>
      <Case c={colors.organisation} href='/contract' title='Suivre un contrat' text='Suivez le paiement d’un Guest recommandé.'/>
    </div>

    <section style={card(c)}>
      <div style={{color:c,fontWeight:900,letterSpacing:2,fontSize:12}}>FANTSAAK / KAASTBASE</div>
      <h2 style={{fontSize:28,margin:'8px 0'}}>Influencez la désirabilité des Talents.</h2>
      <Progress label='Poids de vos signaux ce mois-ci' value='81%' c={c}/>
      <a style={button(c)} href='/mercato'>Investir via la Kaastbase</a>
    </section>
  </main>;
}
function Stat({c,label,value}){return <div style={{padding:18,borderRadius:18,background:'rgba(255,255,255,.05)',border:`1px solid ${c}44`}}><div style={{fontSize:12,color:'#94a3b8'}}>{label}</div><div style={{fontSize:28,fontWeight:900,color:c}}>{value}</div></div>;}
function Case({c,href,title,text}){return <a href={href} style={{...card(c),textDecoration:'none',color:'#fff',padding:18}}><Badge c={c}>{title}</Badge><p style={{color:'#C9D4E4',margin:'8px 0 0',fontSize:13}}>{text}</p></a>;}
