function changeTab(tabNumber) {
    hideTab('tab1');
    hideTab('tab2');
    hideTab('tab3');

    var tabClassName = 'tab' + tabNumber;

    var element = document.getElementsByClassName(tabClassName);

    element[0].style.display = 'block';
}

function hideTab(tabClassName) {
    var element = document.getElementsByClassName(tabClassName);
    element[0].style.display = 'none';
}

function date(){
    var d = new Date();
    var h = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
    var m = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
    document.getElementById("zegarek").innerHTML = h + ":" + m;
  }