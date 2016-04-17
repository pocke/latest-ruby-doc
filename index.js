const buttons = require('sdk/ui/button/action');
const tabs = require("sdk/tabs");

const button = buttons.ActionButton({
  id: "latest-rurema",
  label: "Go to latest rurema",
  icon: "./icon-16.png",
  onClick: handleClick,
});

const LATEST_VERSION = '2.3.0';

function handleClick(state) {
  const url = tabs.activeTab.url;
  const latest = url.replace(/docs\.ruby-lang\.org\/ja\/[^\/]+/, 'docs.ruby-lang.org/ja/' + LATEST_VERSION);
  tabs.activeTab.url = latest;
}
