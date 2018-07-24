$(function() {
    // 小部件定义(其中“custom”是名称空间)“着色”小部件名称
    $.widget("custom.colorize", {
        // 默认选项
        options: {
            red: 255,
            green: 255,
            blue: 255,

            // 回调
            change: null,
            random: null
        },

        // 构造函数
        _create: function() {
            this.element
                //添加一个类
                .addClass("custom-colorize");

            this.changer = $("<button>", {
                    text: "主题切换",
                    "class": "custom-colorize-changer"
                })
                .appendTo(this.element)
                .button();

            //将change按钮上的单击事件绑定到random方法
            this._on(this.changer, {
                // 当小部件被禁用时，_on不会调用random。
                click: "random"
            });
            this._refresh();
        },

        // 创建时调用，稍后更改选项时调用
        _refresh: function() {
            this.element.css("background-color", "rgb(" +
                this.options.red + "," +
                this.options.green + "," +
                this.options.blue + ")"
            );

            // 触发一个回调/事件
            this._trigger("change");
        },

        //可以通过.colorize(“random”)直接调用将颜色更改为随机值的公共方法
        random: function(event) {
            var colors = {
                // red: Math.floor(Math.random() * 256),
                // green: Math.floor(Math.random() * 256),
                // blue: Math.floor(Math.random() * 256)
                // 灰色
                // red: 96,
                // green: 96,
                // blue: 96
                // 淡蓝色
                red: 193,
                green: 210,
                blue: 240
            };

            // 触发一个事件，检查它是否被取消
            if (this._trigger("random", event, colors) !== false) {
                this.option(colors);
            }
        },

        // 通过_on被删除的事件将自动恢复这里的其他修改。
        _destroy: function() {
            //删除生成的元素
            this.changer.remove();

            this.element
                .removeClass("custom-colorize")
                .enableSelection()
                .css("background-color", "transparent");
        },

        // _setOptions使用所有正在更改的选项的散列来调用，这些选项在更改选项时总是刷新
        _setOptions: function() {
            // _super和_superApply保持正确的this-context。
            this._superApply(arguments);
            this._refresh();
        },

        //_setOption针对每个正在更改的选项调用
        _setOption: function(key, value) {
            //防止无效的颜色值
            if (/red|green|blue/.test(key) && (value < 0 || value > 255)) {
                return;
            }
            this._super(key, value);
        }
    });

    // 初始化默认选项
    $("#my-widget").colorize();



    // 初始化后单击以设置选项
    $("#white").on("click", function() {
        $(":custom-colorize").colorize("option", {
            red: 255,
            green: 255,
            blue: 255
        });
    });



    // $("#car-type").focusin(function() {
    //     $(":custom-colorize").colorize("option", {
    //         red: 255,
    //         green: 255,
    //         blue: 255
    //     });
    // });

    // $("#1").mousedown(function() {
    //     $(":custom-colorize").colorize("option", {
    //         red: 255,
    //         green: 255,
    //         blue: 255
    //     }); 
    // });

    // $(".custom-colorize-changer").on('click', function() {
    //     var all_options = $("#car-type").options;
    //     console.log(all_options);
    // });

    $("select").change(func);

    function func() {

        //获取被选中的option标签 

        var vs = $('select  option:selected').val();
        if (vs == 1) {
            // black();
            $("#car-type").change(function() {

                $(":custom-colorize").colorize("option", {
                    red: 255,
                    green: 255,
                    blue: 255
                });
            });
            console.log(vs);
        } else if (vs == 2) {
            // blue();
            // $("#car-type").change(function() {

            //     $(":custom-colorize").colorize("option", {
            //         red: 193,
            //         green: 210,
            //         blue: 240
            //     });
            // });
            console.log(vs);
        }
    };

});