export function seedState(){
 if(typeof window==='undefined') return;
 if(!localStorage.getItem('tsaakWanted')) localStorage.setItem('tsaakWanted', JSON.stringify({title:'Cherche expert IA & société pour débat TV',media:'France 24 Desk Global',budget:'1 800€',deadline:'Ce soir 18:00',status:'Open',brief:'Débat de 12 minutes sur l’impact de l’IA générative sur le travail et les élections.',responses:[]}));
 if(!localStorage.getItem('tsaakShortlist')) localStorage.setItem('tsaakShortlist', JSON.stringify([]));
 if(!localStorage.getItem('tsaakTalentInbox')) localStorage.setItem('tsaakTalentInbox', JSON.stringify([]));
}
export function getJson(k,f){ if(typeof window==='undefined') return f; try{return JSON.parse(localStorage.getItem(k))||f}catch(e){return f}}
export function setJson(k,v){ if(typeof window!=='undefined') localStorage.setItem(k,JSON.stringify(v)); }
