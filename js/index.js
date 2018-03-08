window.onload = function (){
  // 获取footer中所有的a标签
  let guideItems = document.querySelectorAll('#app .guide_item')
  // 获取content下的所有section标签
  let contentList = document.querySelectorAll('#app .content>div')
  // 遍历guideItems并添加touchend事件监听
  for (let i = 0; i < guideItems.length; i++) {
    guideItems[i].addEventListener('touchend', function(){
      for (let j = 0; j < contentList.length; j++) {
        contentList[j].className = 'main_content'
        guideItems[j].className = 'guide_item'
      }
      contentList[i].className = 'main_content on'
      guideItems[i].className = 'guide_item on'
    })
  }
}

/*
window.onload = function (){
  // 获取footer中所有的a标签
  let guideItems = document.querySelectorAll('#app .guide_item')
  // 获取content下的所有section标签
  let contentList = document.querySelectorAll('#app .content>section')
  // 遍历guideItems并添加touchend事件监听
  for (var i = 0; i < guideItems.length; i++) {
    guideItems[i].index = i
    guideItems[i].addEventListener('touchend', function(){
      for (var j = 0; j < contentList.length; j++) {
        contentList[j].className = ''
        guideItems[j].className = 'guide_item'
      }
      var index = this.index
      contentList[index].className = 'on'
      guideItems[index].className = 'guide_item on'
    })
  }
}*/
