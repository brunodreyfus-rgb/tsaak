export const casteThemes = {
  media:{name:'Media', color:'#00E5FF', letter:'M', accent:'cyan', role:'Journalistes, producteurs, rédactions'},
  talent:{name:'Talent', color:'#00FF85', letter:'T', accent:'green', role:'Experts, créateurs, speakers'},
  intermediaire:{name:'Intermédiaire', color:'#FF2BD6', letter:'I', accent:'magenta', role:'Agents, bookers, curateurs'},
  organisation:{name:'Organisation', color:'#FF8A00', letter:'O', accent:'orange', role:'Entreprises, conférences, institutions'},
  communaute:{name:'Communauté', color:'#3B82FF', letter:'C', accent:'blue', role:'Fans, communautés, signaux faibles'}
};

const photos = [
'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80',
'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80',
'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80',
'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=80',
'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=80',
'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=500&q=80',
'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=500&q=80',
'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80'
];
const names=['Sarah Benali','James Carter','Elena Petrova','Omar Al Mansouri','Maya Chen','Victor Moreau','Aisha Rahman','Daniel Brooks','Nadia Kovacs','Luca Romano','Claire Dubois','Samir Haddad','Emily Johnson','Hugo Martin','Leila Hassan','Noah Williams','Anika Mehta','Gabriel Silva','Sofia Alvarez','Kenji Tanaka','Amelia Brown','Youssef Nasser','Mila Novak','Arthur Cohen','Olivia Smith','Karim Bensaid','Eva Müller','George Wilson','Ines Laurent','Ethan Davis','Rania Mansour','Tom Anderson','Lina Haddad','Julien Bernard','Fatima Khan','Oscar Lewis','Nora Haddad','Marc Vidal','Diana Rossi','Adam Clarke','Mina Park','Sergei Ivanov','Rachel Cohen','Bilal Osman','Camille Leroy','Ava Green','Mehdi Amrani','Julia Schneider','Theo Garnier','Isabella Costa'];
const roles=['Geopolitics Analyst','AI Researcher','Energy Transition Expert','Former Military Strategist','Climate Scientist','Cybersecurity Specialist','Emergency Doctor','Economist','Space Industry Expert','Crisis Communication Advisor'];
const countries=['France / UAE','USA','UK','Qatar','Singapore','France','Germany','Canada','Italy','Japan'];
const topics=['AI & society','Middle East','energy security','climate transition','defense','cyber risk','public health','future of work','space economy','social movements'];
export const talents = names.map((name,i)=>({
  id:name.toLowerCase().replaceAll(' ','-'), name, role:roles[i%roles.length], country:countries[i%countries.length], photo:photos[i%photos.length],
  score:86+(i%12), price:`€${800+(i%8)*350}`, languages:i%3===0?['FR','EN','AR']:i%3===1?['EN','FR']:['EN'],
  tags:[topics[i%topics.length], i%2?'TV ready':'Keynote ready', i%4?'Verified':'High demand'],
  linkedin:{headline:`${roles[i%roles.length]} · ${countries[i%countries.length]}`, followers:`${8+i}k`, company:i%2?'Independent Expert':'TSAAK verified network'},
  media:[
    {type:'Video', title:`Live interview on ${topics[i%topics.length]}`, source:i%2?'BBC World':'France 24'},
    {type:'Audio', title:'Podcast expert briefing', source:i%3?'The Brief':'Business Daily'},
    {type:'Written', title:'Opinion column and expert quote', source:i%2?'Le Monde':'Financial Times'}
  ],
  aiFound:[`Trending signal detected on ${topics[i%topics.length]}`, '3 credible media traces found', 'Strong match with current Wanted brief'],
  tsaakBackground:['Profile verified by TSAAK', 'Fast response history', 'Recommended by 2 intermediaries']
}));
export const medias=[
{name:'France 24', type:'TV international', country:'France', contact:'Marc Vidal'},
{name:'LCI', type:'News TV', country:'France', contact:'Julie Perrin'},
{name:'BBC World', type:'International TV', country:'UK', contact:'Rachel Moore'},
{name:'Bloomberg', type:'Business TV', country:'USA', contact:'David Stein'},
{name:'The Brief Podcast', type:'Podcast', country:'UAE', contact:'Nora Aziz'},
{name:'Wired Events', type:'Conference media', country:'USA', contact:'Alan Scott'},
{name:'MENA Future Forum', type:'Event', country:'Qatar', contact:'Mariam Khaled'},
{name:'Arte', type:'Documentary', country:'France/Germany', contact:'Helene Wolf'},
{name:'TEDx Paris', type:'Conference', country:'France', contact:'Ines Robert'},
{name:'TechCrunch Live', type:'Digital media', country:'USA', contact:'Megan Lee'}
];
export const wanted=[
{id:'w1',title:'Expert IA & société pour plateau TV', media:'LCI', status:'Proposals', deadline:'Tomorrow 18:00', budget:'€1,800', brief:'Débat prime time sur IA, emploi et démocratie.', responses:5},
{id:'w2',title:'Speaker climat pour conférence corporate', media:'MENA Future Forum', status:'Shortlist', deadline:'Friday', budget:'€6,500', brief:'Keynote climat, énergie et géopolitique.', responses:8},
{id:'w3',title:'Ancien militaire pour analyse crise', media:'France 24', status:'Contact', deadline:'Today 21:00', budget:'€2,200', brief:'Analyse live sur situation sécuritaire.', responses:3}

];
  // compatibilité anciennes pages
export const casteColors = casteThemes;
