import { page, card, button, colors, TsaakMark, Badge, Masthead } from '../components/RichDemoUI';

const flagship = [
  ['★ Connexion LinkedIn','Le Talent connecte LinkedIn, TSAAK importe le profil puis scanne le web pour retrouver ses preuves média.','/talent-onboarding/self',colors.talent],
  ['★ Contrat & paiement','Template → variables → prévisualisation → signature électronique → paiement sécurisé.','/contract',colors.organisation],
  ['★ Calcul du score','4 leviers pondérés (désirabilité, FanTSAak, passages média, performance) recalculés en direct.','/score-explained',colors.core],
  ['★ Mercato','2 mois par an : médias et guests se positionnent, 3 paliers de contrat, investissement Kaastbase.','/mercato',colors.intermediaire],
];

const cases=[
  ['Recherche proactive','Filtres multiples : sujet, langue, pays, disponibilité, media readiness.','/proactive-search',colors.media],
  ['Patchwork passive search','TSAAK pousse des guests TSAAK / hors TSAAK avant que le média cherche.','/patchwork',colors.intermediaire],
  ['Recherche IA guidée','Le média discute avec l’IA pour clarifier son besoin et trouver le bon guest.','/ai-search',colors.media],
  ['3 entrées Talent','Self signup, invitation intermédiaire, invitation TSAAK via IA Search.','/talent-onboarding',colors.talent],
  ['Help Me urgent','Le média a besoin d’un invité en 2h, TSAAK active le réseau.','/help-me',colors.organisation],
  ['Profil Talent riche','LinkedIn, vidéos, podcast, articles, séminaires et background TSAAK.','/talent/sarah-benali',colors.talent],
];

export default function Demo(){return <main style={page('media')}>
  <Masthead active='démo'/>
  <TsaakMark size={160}/>
  <Badge c={colors.core}>MODE DÉMO</Badge>
  <h1 style={{fontSize:58,maxWidth:920}}>Comment tester la démo TSAAK</h1>
  <p style={{fontSize:20,color:'#C9D4E4',maxWidth:920}}>4 business cases sont entièrement simulés pour les investisseurs. Commencez par eux, puis explorez les cas secondaires ci-dessous.</p>

  <h2 style={{marginTop:10}}>Les 4 business cases à montrer en priorité</h2>
  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:20,marginTop:10}}>{flagship.map((x,i)=><section key={x[0]} style={card(x[3])}><Badge c={x[3]}>PRIORITAIRE</Badge><h2>{x[0]}</h2><p style={{color:'#C9D4E4'}}>{x[1]}</p><a href={x[2]} style={button(x[3])}>Tester →</a></section>)}</div>

  <h2 style={{marginTop:36}}>Cas secondaires</h2>
  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:20,marginTop:10}}>{cases.map((x,i)=><section key={x[0]} style={card(x[3])}><Badge c={x[3]}>CASE {i+1}</Badge><h2>{x[0]}</h2><p style={{color:'#C9D4E4'}}>{x[1]}</p><a href={x[2]} style={button(x[3])}>Tester →</a></section>)}</div>
</main>}
