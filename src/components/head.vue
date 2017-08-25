<template>
  <div class="header">
      <nav>
          <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
          </ul>
      </nav>
  </div>
</template>
<style lang="scss" scoped type="text/css">
    $nav-color: #f90;
    $nav-ul-li-fontSize:12px;
    $nav-ul-li-fontColor:#000;
    $nav-ul-li-marginRight:10px;
    $nav-ul-li-border-color:red;
    $nav-ul-li-border:1px solid $nav-ul-li-border-color;
    $nav-ul-li-padding:10px 30px;
    $nav-ul-li-borderRadius:3px;
    nav{
        $width:100%;
        width:$width;
        color:$nav-color;
        ul{
            li{
                float:left;
                list-style-type: none;
                font-size:$nav-ul-li-fontSize;
                color:$nav-ul-li-fontColor;
                margin-right: $nav-ul-li-marginRight;
                border:$nav-ul-li-border;
                padding:$nav-ul-li-padding;
                border-radius:$nav-ul-li-borderRadius;
            }
        }
    }
</style>
