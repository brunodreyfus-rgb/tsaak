import { page, card, button, colors, Badge, Progress, Masthead, PERSONAS } from '../components/RichDemoUI';

export default function Media(){
  const c = colors.media;
  const me = PERSONAS.find(p=>p.key==='media');
  return <main style={page('media')}>
    <Masthead active='castes'/>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:16,marginBottom:22}}>
      <div><Badge c={c}>CASTE MEDIA</Badge><h1 style={{margin:'10px 0 4px'}}>Salut {me.name} 👋</h1><p style={{color:'#AAB3C5',margin:0}}>{me.role} — 4 Wanted actifs attendent une shortlist.</p></div>
      <img src={me.photo} style={{width:64,height:64,borderRadius:20,objectFit:'cover',border:`1px solid ${c}55`}}/>
    </div>

    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:14,marginBottom:24}}>
      <Stat c={c} label='Wanted actifs' value='4'/>
      <Stat c={c} label='Réponses reçues' value='12'/>
      <Stat c={c} label='Contrats en cours' value='2'/>
      <Stat c={colors.core} label='Score moyen guests' value='89'/>
    </div>

    <h2>Business cases à tester depuis cette caste</h2>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))',gap:14,marginBottom:26}}>
      <Case c={c} href='/search' title='Recherche' text='Filtrez la base de talents en direct.'/>
      <Case c={colors.intermediaire} href='/patchwork' title='Patchwork' text='Suggestions passives poussées par l’IA.'/>
      <Case c={c} href='/wanted' title='Créer un Wanted' text='Publiez un besoin, recevez des propositions.'/>
      <Case c={colors.talent} href='/ai-search' title='Assistant IA' text='Décrivez votre besoin en langage naturel.'/>
      <Case c={colors.organisation} href='/help-me' title='Help Me urgent' text='Un besoin en moins de 2h ? Activez le réseau.'/>
      <Case c={colors.core} href='/shortlist' title='Multi-message' text='Contactez plusieurs talents en un clic.'/>
      <Case c={colors.organisation} href='/contract' title='Contrat & paiement' text='Signature électronique puis paiement en ligne.'/>
      <Case c={colors.intermediaire} href='/mercato' title='Mercato' text='Positionnez-vous sur un Guest libre.'/>
    </div>

    <section style={card(c)}>
      <div style={{color:c,fontWeight:900,letterSpacing:2,fontSize:12}}>WANTED EN COURS</div>
      <h2 style={{fontSize:28,margin:'8px 0'}}>Expert IA & société pour plateau TV</h2>
      <Progress label='Statut : Proposals reçues' value='75%' c={c}/>
      <p style={{color:'#AAB3C5'}}>3 propositions reçues, 1 talent externe à inviter, 2 prêts à contacter.</p>
      <a href='/media/proposals' style={button(c)}>Voir les propositions</a>
    </section>
  </main>;
}
function Stat({c,label,value}){return <div style={{padding:18,borderRadius:18,background:'rgba(255,255,255,.05)',border:`1px solid ${c}44`}}><div style={{fontSize:12,color:'#94a3b8'}}>{label}</div><div style={{fontSize:28,fontWeight:900,color:c}}>{value}</div></div>;}
function Case({c,href,title,text}){return <a href={href} style={{...card(c),textDecoration:'none',color:'#fff',padding:18}}><Badge c={c}>{title}</Badge><p style={{color:'#C9D4E4',margin:'8px 0 0',fontSize:13}}>{text}</p></a>;}
