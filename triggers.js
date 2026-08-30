// Central trigger registry. Add or edit entries here without changing calculator logic.
window.TRIGGERS = {
  '1+1': {
    type: 'video-audio',
    video: 'Beer.mp4',
    audio: 'Beer.mp3',
    muted: true,
    sync: true,
    label: 'Beer'
  },
  '2+2': {
    type: 'video',
    video: 'jv.mp4',
    muted: false,
    label: 'JV'
  },
  '123': {
    type: 'video',
    video: 'snaptik_7624995020080286990_v3.mp4',
    muted: false,
    label: '123'
  },
  '69': {
    type: 'result',
    video: 'jv.mp4',
    muted: false,
    label: '69'
  },
  '404': {
    type: 'result',
    video: 'jv.mp4',
    muted: false,
    label: '404'
  },
  '666': {
    type: 'result',
    video: 'jv.mp4',
    muted: false,
    label: '666'
  }
};

// Optional result-based triggers. These run after a valid calculation.
window.RESULT_TRIGGERS = {
  69: window.TRIGGERS['69'],
  404: window.TRIGGERS['404'],
  666: window.TRIGGERS['666']
};
