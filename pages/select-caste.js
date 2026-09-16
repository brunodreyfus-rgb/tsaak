import { page, card, colors, Badge, Masthead } from '../components/RichDemoUI';

const castes = [
  ['Media','/media','media','Journalistes, producteurs, rédactions'],
  ['Talent','/talent','talent','Experts, créateurs, speakers'],
  ['Intermédiaire','/intermediaires','intermediaire','Bookeurs, trouveurs, agents'],
  ['Communauté','/communaute','communaute','FanTSAak, curateurs'],
  ['Organisation','/organisation','organisation','Marques, conférences, institutions'],
];

export default function Select(){
  return <main style={page('media')}>
    <Masthead active='castes'/>
    <h1 style={{fontSize:44}}>Je me connecte comme…</h1>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))',gap:18,marginTop:20}}>
      {castes.map(([n,h,k,role])=><a key={n} href={h} style={{...card(colors[k]),textDecoration:'none',color:'#fff'}}>
        <Badge c={colors[k]}>Caste</Badge>
        <h2 style={{margin:'10px 0 4px'}}>{n}</h2>
        <p style={{color:'#94a3b8',fontSize:14,margin:0}}>{role}</p>
      </a>)}
    </div>
  </main>;
}
