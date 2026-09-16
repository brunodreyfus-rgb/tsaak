import { page, card, button, ghost, colors, Badge, Progress, Masthead, Avatar } from '../components/RichDemoUI';
import { talents } from '../data/talents';

export default function Media(){
  const c = colors.media;
  const picks = talents.slice(0,3);
  return <main style={page('media')}>
    <Masthead active='castes'/>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:16,marginBottom:22}}>
      <div><Badge c={c}>CASTE MEDIA</Badge><h1 style={{margin:'10px 0 4px'}}>Salut Marc 👋</h1><p style={{color:'#AAB3C5',margin:0}}>Senior Producer · France 24 — 4 Wanted actifs attendent une shortlist.</p></div>
      <Avatar big src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop' name='Marc Vidal' role='Senior Producer'/>
    </div>

    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:14,marginBottom:24}}>
      <Stat c={c} label='Wanted actifs' value='4'/>
      <Stat c={c} label='Réponses reçues' value='12'/>
      <Stat c={c} label='Contrats en cours' value='2'/>
      <Stat c={colors.core} label='Score moyen guests' value='89'/>
    </div>

    <h2>Business cases à tester depuis cette caste</h2>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))',gap:16,marginBottom:30}}>
      <Case c={colors.organisation} href='/contract' title='Contrat & paiement' text='Composez un contrat, faites signer le Talent puis payez en ligne.'/>
      <Case c={colors.intermediaire} href='/mercato' title='Mercato' text='Positionnez-vous sur un Guest libre pendant la fenêtre Mercato.'/>
      <Case c={colors.talent} href='/score-explained' title='Score TSAAK' text='Comprenez comment le score guide vos décisions de booking.'/>
      <Case c={c} href='/help-me' title='Help Me urgent' text='Un besoin en moins de 2h ? Activez le réseau TSAAK.'/>
    </div>

    <div style={{display:'grid',gridTemplateColumns:'1.2fr .8fr',gap:22}}>
      <section style={card(c)}>
        <div style={{color:c,fontWeight:900,letterSpacing:2,fontSize:12}}>MEDIA COMMAND CENTER</div>
        <h2 style={{fontSize:38,margin:'10px 0'}}>Trouvez la bonne voix avant tout le monde.</h2>
        <p style={{color:'#AAB3C5',fontSize:16}}>Recherche IA, Patchwork, Wanted, Help Me, shortlist et multi-message dans un seul cockpit.</p>
        <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:18}}>
          <a href='/search' style={button(c)}>Recherche IA</a>
          <a href='/wanted' style={ghost(c)}>Créer un Wanted</a>
          <a href='/help-me' style={ghost(c)}>Créer un Help Me</a>
          <a href='/messaging' style={ghost(c)}>Multi-message</a>
        </div>
      </section>
      <section style={card(c)}>
        <h3>Wanted en cours — statut</h3>
        <Progress label='Proposals reçues' value='75%' c={c}/>
        <p style={{color:'#AAB3C5'}}>3 propositions reçues, 1 talent externe à inviter, 2 prêts à contacter.</p>
        <a href='/proposals' style={button(c)}>Voir les propositions</a>
      </section>
    </div>

    <h2 style={{marginTop:34}}>Patchwork IA — suggestions du jour</h2>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:18}}>
      {picks.map(t=><div key={t.id} style={card(c)}>
        <img src={t.photo} style={{width:'100%',height:180,objectFit:'cover',borderRadius:18}}/>
        <h3 style={{margin:'12px 0 2px'}}>{t.name}</h3><p style={{color:c,margin:0}}>{t.role}</p>
        <p style={{color:'#AAB3C5',fontSize:13}}>Score <b>{t.score}</b> · {t.price} — {t.aiFound && t.aiFound[0]}</p>
        <a href={`/talent/${t.id}`} style={ghost(c)}>Voir le profil</a>
      </div>)}
    </div>
  </main>;
}
function Stat({c,label,value}){return <div style={{padding:18,borderRadius:18,background:'rgba(255,255,255,.05)',border:`1px solid ${c}44`}}><div style={{fontSize:12,color:'#94a3b8'}}>{label}</div><div style={{fontSize:28,fontWeight:900,color:c}}>{value}</div></div>;}
function Case({c,href,title,text}){return <a href={href} style={{...card(c),textDecoration:'none',color:'#fff'}}><Badge c={c}>{title}</Badge><p style={{color:'#C9D4E4',margin:'10px 0 0'}}>{text}</p></a>;}
