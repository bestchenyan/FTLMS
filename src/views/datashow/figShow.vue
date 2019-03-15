<template>
    <div>
        <div class="container">
            <canvas id="tutorial" width="1000" height="1000"></canvas>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        mounted() {
            var c=document.getElementById("tutorial");
            var ctx=c.getContext("2d");
            //zYsNG->A
            ctx.beginPath();
            ctx.moveTo(540,500);
            ctx.lineTo(810,500);
            ctx.font="20px Arial";
            ctx.fillText("A",820,500);
            ctx.strokeStyle="red";
            ctx.stroke();
            ctx.closePath();
            //zYsNG->B
            ctx.beginPath();
            ctx.strokeStyle="red";
            ctx.moveTo(540,492);
            ctx.lineTo(800,450);
            ctx.font="20px Arial";
            ctx.fillText("B",810,450);
            ctx.stroke();
            ctx.closePath();
            //zYsNG->C
            ctx.beginPath();
            ctx.strokeStyle="red";
            ctx.moveTo(536,484);
            ctx.lineTo(790,400);
            ctx.font="20px Arial";
            ctx.fillText("C",800,400);
            ctx.stroke();
            ctx.closePath();

            //zYsNG->D
            ctx.beginPath();
            ctx.strokeStyle="yellow";
            ctx.moveTo(532,476);
            ctx.lineTo(700,350);
            ctx.font="20px Arial";
            ctx.fillText("D",710,350);
            ctx.stroke();
            ctx.closePath();
            //zYsNG->E
            ctx.beginPath();
            ctx.strokeStyle="yellow";
            ctx.moveTo(526,468);
            ctx.lineTo(660,310);
            ctx.font="20px Arial";
            ctx.fillText("E",665,310);
            ctx.stroke();
            ctx.closePath();
            //zYsNG->F
            ctx.beginPath();
            ctx.strokeStyle="yellow";
            ctx.moveTo(516,462);
            ctx.lineTo(620,280);
            ctx.font="20px Arial";
            ctx.fillText("F",625,280);
            ctx.stroke();
            ctx.closePath();
            //zYsNG->G
            ctx.beginPath();
            ctx.strokeStyle="yellow";
            ctx.moveTo(505,460);
            ctx.lineTo(580,250);
            ctx.font="20px Arial";
            ctx.fillText("G",580,250);
            ctx.stroke();
            ctx.closePath();
            //zYsNG->H
            ctx.beginPath();
            ctx.strokeStyle="yellow";
            ctx.moveTo(495,460);
            ctx.lineTo(540,230);
            ctx.font="20px Arial";
            ctx.fillText("H",540,230);
            ctx.stroke();
            ctx.closePath();
            //zYsNG->I
            ctx.beginPath();
            ctx.strokeStyle="yellow";
            ctx.moveTo(483,463);
            ctx.lineTo(490,225);
            ctx.font="20px Arial";
            ctx.fillText("I",490,220);
            ctx.stroke();
            ctx.closePath();
            //zYsNG->J
            ctx.beginPath();
            ctx.strokeStyle="blue";
            ctx.moveTo(472,470);
            ctx.lineTo(390,260);
            ctx.font="20px Arial";
            ctx.fillText("J",380,250);
            ctx.stroke();
            ctx.closePath();
            //zYsNG->K
            ctx.beginPath();
            ctx.strokeStyle="blue";
            ctx.moveTo(465,480);
            ctx.lineTo(340,300);
            ctx.font="20px Arial";
            ctx.fillText("K",330,290);
            ctx.stroke();
            ctx.closePath();
            //zYsNG->l
            ctx.beginPath();
            ctx.strokeStyle="blue";
            ctx.moveTo(460,488);
            ctx.lineTo(290,350);
            ctx.font="20px Arial";
            ctx.fillText("L",280,340);
            ctx.stroke();
            ctx.closePath();
            //zYsNG->M
            ctx.beginPath();
            ctx.strokeStyle="blue";
            ctx.moveTo(459,498);
            ctx.lineTo(260,410);
            ctx.font="20px Arial";
            ctx.fillText("M",240,410);
            ctx.stroke();
            ctx.closePath();
            //zYsNG->N
            ctx.beginPath();
            ctx.strokeStyle="green";
            ctx.moveTo(461,505);
            ctx.lineTo(265,505);
            ctx.font="20px Arial";
            ctx.fillText("N",250,495);
            ctx.stroke();
            ctx.closePath();
            //zYsNG->o
            ctx.beginPath();
            ctx.strokeStyle="green";
            ctx.moveTo(462,515);
            ctx.lineTo(270,550);
            ctx.font="20px Arial";
            ctx.fillText("O",250,550);
            ctx.stroke();
            ctx.closePath();
            //zYsNG->p
            ctx.beginPath();
            ctx.strokeStyle="green";
            ctx.moveTo(468,524);
            ctx.lineTo(290,600);
            ctx.font="20px Arial";
            ctx.fillText("P",280,600);
            ctx.stroke();
            ctx.closePath();
            //zYsNG->Q
            ctx.beginPath();
            ctx.strokeStyle="green";
            ctx.moveTo(476,533);
            ctx.lineTo(320,640);
            ctx.font="20px Arial";
            ctx.fillText("Q",300,640);
            ctx.stroke();
            ctx.closePath();
            //zYsNG->R
            ctx.beginPath();
            ctx.strokeStyle="green";
            ctx.moveTo(487,538);
            ctx.lineTo(350,680);
            ctx.font="20px Arial";
            ctx.fillText("R",330,680);
            ctx.stroke();
            ctx.closePath();
            //zYsNG->S
            ctx.beginPath();
            ctx.strokeStyle="black";
            ctx.moveTo(500,540);
            ctx.lineTo(500,650);
            ctx.font="20px Arial";
            ctx.fillText("S",500,670);
            ctx.stroke();
            ctx.closePath();
            //zYsNG->T
            ctx.beginPath();
            ctx.strokeStyle="black";
            ctx.moveTo(513,538);
            ctx.lineTo(550,650);
            ctx.font="20px Arial";
            ctx.fillText("T",550,670);
            ctx.stroke();
            ctx.closePath();
            //zYsNG->U
            ctx.beginPath();
            ctx.strokeStyle="black";
            ctx.moveTo(526,533);
            ctx.lineTo(590,640);
            ctx.font="20px Arial";
            ctx.fillText("U",590,660);
            ctx.stroke();
            ctx.closePath();
            //zYsNG->V
            ctx.beginPath();
            ctx.strokeStyle="black";
            ctx.moveTo(535,521);
            ctx.lineTo(630,620);
            ctx.font="20px Arial";
            ctx.fillText("V",640,650);
            ctx.stroke();
            ctx.closePath();
            //zYsNG->W
            ctx.beginPath();
            ctx.strokeStyle="blue";
            ctx.moveTo(540,510);
            ctx.lineTo(750,580);
            ctx.font="20px Arial";
            ctx.fillText("W",750,600);
            ctx.stroke();
            ctx.closePath();
            //zYsNG
            ctx.beginPath();
            ctx.arc(500,500,40,0,360);
            ctx.strokeStyle="black";
            // ctx.fillStyle="green";
            ctx.font="14px Georgia";
            ctx.fillText("zYsNG",480,505);
            ctx.stroke();
            ctx.closePath();



        },
        methods: {

        }
    }
</script>
<style scoped>
    .container{

    }
    #tutorial{
        position:absolute;  /*设置绝对定位*/
        /*background:#abcdef;*/
        top:0;
        left:0;             /*设置top | left | right | bottom都等于0*/
        right:0;
        bottom:0;
        margin: auto;      /*水平垂直居中*/
    }

</style>

