import { page, card, button, ghost, colors, Badge, Progress, Masthead, Avatar } from '../components/RichDemoUI';

export default function Communaute(){
  const c = colors.communaute;
  return <main style={page('communaute')}>
    <Masthead active='castes'/>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:16,marginBottom:22}}>
      <div><Badge c={c}>CASTE COMMUNAUTÉ</Badge><h1 style={{margin:'10px 0 4px'}}>Salut Léo 👋</h1><p style={{color:'#AAB3C5',margin:0}}>FanTSAak · Curateur climat & tech — tes recommandations ont généré 6 nouveaux signaux cette semaine.</p></div>
      <Avatar big src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop' name='Léo Martin' role='FanTSAak'/>
    </div>

    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:14,marginBottom:24}}>
      <Stat c={c} label='Talents suivis' value='28'/>
      <Stat c={c} label='Recommandations utiles' value='6'/>
      <Stat c={colors.core} label='Indice FanTSAak' value='81%'/>
      <Stat c={c} label='Guests investis (Mercato)' value='2'/>
    </div>

    <h2>Business cases à tester depuis cette caste</h2>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))',gap:16,marginBottom:30}}>
      <Case c={colors.core} href='/score-explained' title='Score TSAAK' text='Voyez le poids exact de l’indice FanTSAak dans le score.'/>
      <Case c={colors.intermediaire} href='/mercato' title='Mercato' text='La Kaastbase peut investir jusqu’à 30% de la valeur d’un Guest.'/>
      <Case c={colors.talent} href='/patchwork' title='Patchwork' text='Explorez les suggestions passives poussées aux médias.'/>
      <Case c={colors.organisation} href='/contract' title='Suivre un contrat' text='Suivez le paiement d’un Guest que vous avez recommandé.'/>
    </div>

    <section style={card(c)}>
      <div style={{color:c,fontWeight:900,letterSpacing:2,fontSize:12}}>FANTSAAK / KAASTBASE</div>
      <h2 style={{fontSize:34,margin:'10px 0'}}>Influencez la désirabilité des Talents.</h2>
      <p style={{color:'#AAB3C5'}}>Suivez des talents, recommandez-les aux médias, commentez leurs interventions et investissez sur eux via la Kaastbase.</p>
      <Progress label='Poids de vos signaux ce mois-ci' value='81%' c={c}/>
      <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
        <a style={button(c)} href='/mercato'>Investir via la Kaastbase</a>
        <a style={ghost(c)} href='/patchwork'>Ouvrir le feed FanTSAak</a>
      </div>
    </section>
  </main>;
}
function Stat({c,label,value}){return <div style={{padding:18,borderRadius:18,background:'rgba(255,255,255,.05)',border:`1px solid ${c}44`}}><div style={{fontSize:12,color:'#94a3b8'}}>{label}</div><div style={{fontSize:28,fontWeight:900,color:c}}>{value}</div></div>;}
function Case({c,href,title,text}){return <a href={href} style={{...card(c),textDecoration:'none',color:'#fff'}}><Badge c={c}>{title}</Badge><p style={{color:'#C9D4E4',margin:'10px 0 0'}}>{text}</p></a>;}
