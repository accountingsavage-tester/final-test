// Central easter-egg registry. Add triggers here without changing calculator logic.
// exact triggers fire as soon as their input is complete; result triggers fire after =.
window.TRIGGERS = {
  '1+1': { type:'exact', video:'Beer.mp4', audio:'Beer.mp3', muted:true, sync:true, label:'Beer' },
  '2+2': { type:'exact', video:'jv.mp4', muted:false, label:'JV' },
  '123': { type:'exact', video:'snaptik_7624995020080286990_v3.mp4', muted:false, label:'123' }
};
window.RESULT_TRIGGERS = {
  '69': { type:'result', video:'jv.mp4', muted:false, label:'69' },
  '404': { type:'result', video:'jv.mp4', muted:false, label:'404' },
  '666': { type:'result', video:'jv.mp4', muted:false, label:'666' }
};
