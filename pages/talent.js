import { page, card, button, ghost, colors, Badge, Progress, Masthead, Avatar } from '../components/RichDemoUI';

export default function Talent(){
  const c = colors.talent;
  return <main style={page('talent')}>
    <Masthead active='castes'/>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:16,marginBottom:22}}>
      <div><Badge c={c}>CASTE TALENT</Badge><h1 style={{margin:'10px 0 4px'}}>Salut Sarah 👋</h1><p style={{color:'#AAB3C5',margin:0}}>Analyste géopolitique — LCI veut te contacter pour une intervention demain.</p></div>
      <Avatar big src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop' name='Sarah Benali' role='Geopolitics Analyst'/>
    </div>

    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:14,marginBottom:24}}>
      <Stat c={c} label='Score TSAAK' value='94'/>
      <Stat c={c} label='Interventions' value='18'/>
      <Stat c={c} label='Contrats signés' value='7'/>
      <Stat c={colors.core} label='Revenus cumulés' value='18,4K€'/>
    </div>

    <h2>Business cases à tester depuis cette caste</h2>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))',gap:16,marginBottom:30}}>
      <Case c={c} href='/talent-onboarding/self' title='Connexion LinkedIn' text='Importez votre profil et laissez l’IA retrouver vos preuves média.'/>
      <Case c={colors.organisation} href='/contract' title='Signer & être payée' text='Signature électronique puis paiement post-signature.'/>
      <Case c={colors.core} href='/score-explained' title='Comprendre mon score' text='Ajustez les curseurs et voyez le score TSAAK évoluer en direct.'/>
      <Case c={colors.intermediaire} href='/mercato' title='Mercato' text='Recevez des offres de plusieurs médias et choisissez votre caste.'/>
    </div>

    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:22}}>
      <section style={card(c)}>
        <div style={{color:c,fontWeight:900,letterSpacing:2,fontSize:12}}>TALENT STUDIO</div>
        <h2 style={{fontSize:34,margin:'10px 0'}}>Votre valeur média, mise à jour chaque jour.</h2>
        <p style={{color:'#AAB3C5'}}>Import LinkedIn, scan IA, interventions, contrats et demandes entrantes.</p>
        <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          <a href='/talent-onboarding/self' style={button(c)}>Importer LinkedIn</a>
          <a href='/score-explained' style={ghost(c)}>Lancer le scan IA</a>
        </div>
      </section>
      <section style={card(c)}>
        <h3>Demande entrante</h3>
        <Progress label='Étape du deal' value='60%' c={c}/>
        <p><b>France 24</b> souhaite un segment live sur IA & société demain.</p>
        <a href='/messaging' style={button(c)}>Accepter & répondre</a>
      </section>
    </div>
  </main>;
}
function Stat({c,label,value}){return <div style={{padding:18,borderRadius:18,background:'rgba(255,255,255,.05)',border:`1px solid ${c}44`}}><div style={{fontSize:12,color:'#94a3b8'}}>{label}</div><div style={{fontSize:28,fontWeight:900,color:c}}>{value}</div></div>;}
function Case({c,href,title,text}){return <a href={href} style={{...card(c),textDecoration:'none',color:'#fff'}}><Badge c={c}>{title}</Badge><p style={{color:'#C9D4E4',margin:'10px 0 0'}}>{text}</p></a>;}
