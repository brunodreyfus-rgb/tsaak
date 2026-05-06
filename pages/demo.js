import { page, nav, card, button, colors, TsaakMark, Badge } from '../components/RichDemoUI';
const cases=[
['Recherche proactive','Filtres multiples : sujet, langue, pays, disponibilité, media readiness.','/proactive-search',colors.media],
['Patchwork passive search','TSAAK pousse des guests TSAAK / hors TSAAK avant que le media cherche.','/patchwork',colors.intermediaire],
['Recherche IA guidée','Le média discute avec l’IA pour clarifier son besoin et trouver le bon guest.','/ai-search',colors.media],
['3 entrées Talent','Self signup, invitation intermédiaire, invitation TSAAK via IA Search.','/talent-onboarding',colors.talent],
['Score Talent','Désirabilité, FanTSAak, preuves média, performance.','/score-explained',colors.core],
['Help Me urgent','Le média a besoin d’un invité en 2h, TSAAK active le réseau.','/help-me',colors.organisation],
['Profil Talent riche','LinkedIn, vidéos, podcast, articles, séminaires et background TSAAK.','/talent/sarah-benali',colors.talent]
];
export default function Demo(){return <main style={page('media')}>{nav(colors.media)}<TsaakMark size={160}/><Badge c={colors.core}>MODE DÉMO</Badge><h1 style={{fontSize:58,maxWidth:920}}>Comment tester la démo TSAAK</h1><p style={{fontSize:20,color:'#C9D4E4',maxWidth:920}}>Chaque carte correspond à un business case. Clique, montre le résultat attendu, puis reviens ici.</p><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:20,marginTop:28}}>{cases.map((x,i)=><section key={x[0]} style={card(x[3])}><Badge c={x[3]}>CASE {i+1}</Badge><h2>{x[0]}</h2><p style={{color:'#C9D4E4'}}>{x[1]}</p><a href={x[2]} style={button(x[3])}>Tester →</a></section>)}</div></main>}
