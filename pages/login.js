import { page, card, button, colors } from '../components/RichDemoUI';

export default function Login(){
  return <main style={{...page('media'),display:'grid',placeItems:'center'}}>
    <div style={{...card(colors.media),maxWidth:440,width:'100%',textAlign:'center'}}>
      <img src="/tsaak-logo.jpg" style={{width:130,margin:'0 auto 10px'}}/>
      <h1 style={{fontSize:28}}>Connexion TSAAK</h1>
      <p style={{color:'#94a3b8',fontSize:14,marginTop:-6}}>Démo investisseur — aucune donnée réelle n’est utilisée.</p>
      <div style={{display:'grid',gap:12,marginTop:18,textAlign:'left'}}>
        <input placeholder='Email' style={inp}/>
        <input placeholder='Mot de passe' type='password' style={inp}/>
      </div>
      <a className='btn' style={{...button(colors.media),display:'block',marginTop:16,border:'none'}} href="/select-caste">Se connecter</a>
      <a style={{...button('#0A66C2'),display:'flex',alignItems:'center',justifyContent:'center',gap:10,marginTop:10}} href="/talent-onboarding/self">
        <span style={{width:20,height:20,borderRadius:5,background:'#fff',color:'#0A66C2',display:'grid',placeItems:'center',fontWeight:900,fontSize:11}}>in</span>
        Continuer avec LinkedIn
      </a>
      <p style={{marginTop:16,fontSize:13}}><a href='/signup' style={{color:colors.media}}>Créer un compte</a></p>
    </div>
  </main>;
}
const inp = {width:'100%',padding:14,borderRadius:14,background:'rgba(255,255,255,.06)',color:'#fff',border:'1px solid rgba(255,255,255,.14)',boxSizing:'border-box'};
