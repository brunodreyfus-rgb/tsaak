import { page, card, colors, Badge, Masthead, PERSONAS, StatCard, PerfCard, ActivityCard } from '../components/RichDemoUI';

export default function Talent(){
  const c = colors.talent;
  const me = PERSONAS.find(p=>p.key==='talent');
  return <main style={page('talent')}>
    <Masthead active='castes'/>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:16,marginBottom:22}}>
      <div><Badge c={c}>CASTE TALENT</Badge><h1 style={{margin:'10px 0 4px'}}>Salut {me.name} 👋</h1><p style={{color:'#AAB3C5',margin:0}}>{me.role} — LCI veut te contacter pour une intervention demain.</p></div>
      <img src={me.photo} style={{width:64,height:64,borderRadius:20,objectFit:'cover',border:`1px solid ${c}55`}}/>
    </div>

    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:14,marginBottom:18}}>
      <StatCard c={c} label='Score TSAAK' value='94' delta='+2 pts'/>
      <StatCard c={c} label='Interventions' value='18'/>
      <StatCard c={c} label='Contrats signés' value='7'/>
      <StatCard c={colors.core} label='Revenus cumulés' value='18,4K€' delta='+1,8K€'/>
    </div>

    <div style={{display:'grid',gridTemplateColumns:'1.1fr 1.4fr',gap:16,marginBottom:26,alignItems:'stretch'}}>
      <PerfCard c={c} title='Score TSAAK — historique' value='94' data={[83,86,88,90,91,93,94]} caption="Recalculé à chaque nouvelle preuve média retrouvée par l'IA."/>
      <ActivityCard c={c} title='Demandes entrantes' badge='2 nouvelles' rows={[
        { icon:'📺', title:'France 24 — segment live sur IA & société', subtitle:'Étape du deal : en négociation', right:'60%', rightSub:'Avancement' },
        { icon:'🎤', title:'LCI — intervention plateau demain', subtitle:'Fee proposé 1 400 €', right:'Nouveau', rightColor:colors.core },
      ]} cta={{ href:'/messaging', label:'Répondre aux demandes' }}/>
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
  </main>;
}
function Case({c,href,title,text}){return <a href={href} style={{...card(c),textDecoration:'none',color:'#fff',padding:18}}><Badge c={c}>{title}</Badge><p style={{color:'#C9D4E4',margin:'8px 0 0',fontSize:13}}>{text}</p></a>;}
