export const casteColors = {
  media: '#00D5FF',
  talent: '#7CFFB2',
  intermediaire: '#B980FF',
  communaute: '#FFB84D',
  organisation: '#FF5C8A'
};

export const talents = [
  {id:'t1', name:'Sarah Benali', title:'Géopolitique Moyen-Orient', tags:['géopolitique','Ukraine','Moyen-Orient','TV'], score:94, price:'1 200 €', lang:'FR · EN · AR', status:'Tsaak verified', photo:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop', why:'TV ready · arabe/français · analyse crise'},
  {id:'t2', name:'Marc Delcourt', title:'Économie & inflation', tags:['économie','inflation','marchés','radio'], score:89, price:'950 €', lang:'FR · EN', status:'Disponible ce soir', photo:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop', why:'Pédagogique · ancien banque centrale · podcast'},
  {id:'t3', name:'Lina Moreau', title:'Climat & énergie', tags:['climat','énergie','COP','conférence'], score:91, price:'1 500 €', lang:'FR · EN', status:'Score rising', photo:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop', why:'Chercheuse · forte FanTsaak · conférence'},
  {id:'t4', name:'Colonel Hugo Martin', title:'Défense & stratégie militaire', tags:['militaire','défense','OTAN','sécurité'], score:87, price:'1 800 €', lang:'FR · EN', status:'NDA possible', photo:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop', why:'Ex-terrain · crédibilité crise · plateau'},
  {id:'t5', name:'Dr Inès Carvalho', title:'Santé publique & urgences', tags:['santé','hôpital','crise','médecine'], score:86, price:'800 €', lang:'FR · PT · EN', status:'Remote OK', photo:'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop', why:'Médecin · vulgarisation · intervention rapide'},
  {id:'t6', name:'Noam Weiss', title:'IA, cybersécurité & deepfake', tags:['IA','cybersécurité','deepfake','tech'], score:93, price:'2 000 €', lang:'FR · EN · HE', status:'Top match', photo:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop', why:'Expert IA · vidéos détectées · trending'},
  {id:'t7', name:'Amina Diallo', title:'Sociologie urbaine', tags:['société','banlieues','jeunesse','terrain'], score:84, price:'700 €', lang:'FR', status:'Organic', photo:'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&auto=format&fit=crop', why:'Terrain · ton accessible · débats société'},
  {id:'t8', name:'Victor Stein', title:'Transition industrielle', tags:['industrie','énergie','supply chain','business'], score:82, price:'1 100 €', lang:'FR · DE · EN', status:'Sponsored', photo:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop', why:'CEO · concret · business media'}
];

export const medias = [
  {name:'France 24', type:'TV internationale', country:'France'},
  {name:'Le Signal', type:'Média digital', country:'France'},
  {name:'Business Next', type:'Podcast business', country:'Belgique'},
  {name:'Global Brief', type:'YouTube news', country:'UK'}
];

export const demoWanted = {
  title:'Expert IA et deepfake pour émission spéciale',
  media:'France 24',
  budget:'1 500–2 500 €',
  date:'Vendredi 18:00',
  status:'Open',
  brief:'Trouver un expert capable d’expliquer les risques de deepfake pendant une campagne électorale, en langage simple et avec expérience média.'
};
