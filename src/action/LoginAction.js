import Channel from '../channel/indext';

var channel = new Channel();
function _onLogin(e) {
  return channel.onPostLogin(e).then(data => {
    return data;
  });
}

export default {_onLogin};
