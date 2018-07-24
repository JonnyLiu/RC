 //设置默认颜色主题
 $(document).ready(function() {
     black();
 });
 // 点击单个换色
 function black() {
     change("#000000");
 }

 function blue() {
     change("#177cb0");
 }

 function red() {
     change("#db5a6b");
 }

 function green() {
     change("#008000");
 }

 //设置需要改变颜色的元素及其样式
 function change(colo) {
     $("#calc").css("background-color", colo);
     $("h2, span").css("color", colo);
     $("input").css("color", colo);
     $("input[type=text]").focus(function() {
         $(this).css("outline", "none")
     });
     $("input[type=text]").focus(function() {
         $(this).css("border", "2px solid " + colo)
     });
     $("input[type=text]").blur(function() {
         $(this).css("border", "1px solid gray")
     });

     $("select").change(function() {
         var vs = $('select  option:selected').val();
         switch (vs) {
             case 1:
                 black();
                 console.log(vs)
                 break;
             case 2:
                 blue()
                 break;
             case 3:
                 red()
                 break;
             case 4:
                 green()
                 break;


         };
     });
     //  $("select").change(function() {
     //      var vs = $('select  option:selected').val();
     //      if (vs == 1) {
     //          black();
     //          console.log(vs);
     //      } else if (vs == 2) {
     //          blue();
     //          console.log(vs);
     //      } else if (vs == 3) {
     //          red();
     //          console.log(vs);
     //      } else if (vs == 4) {
     //          green();
     //          console.log(vs);
     //      }
     //  });

     //  function func() {

     //      //获取被选中的option标签 

     //      var vs = $('select  option:selected').val();
     //      if (vs == 1) {
     //          black();
     //      } else if (vs == 2) {
     //          blue();
     //      } else if (vs == 3) {
     //          red();
     //      } else if (vs == 4) {
     //          green();
     //      }
     //      console.log(vs);
     //  };



     function display(optionID) {
         var all_options = document.getElementById("menu").options;
         for (i = 0; i < all_options.length; i++) {
             if (all_options[i].id == optionID) // 根据option标签的ID来进行判断  测试的代码这里是两个等号
             {
                 all_options[i].selected = true;
             }
         }
     };
     display("3");

 }