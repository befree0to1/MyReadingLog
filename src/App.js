import React from "react";
import Booklist from "./components/Booklist";
import Review from "./components/Review";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_id: 3,
      contents: contents,
    };
  }
  render() {
    let _title, _desc, _img;
    let i = 0;
    while (i < this.state.contents.length) {
      if (this.state.contents[i].id === this.state.selected_id) {
        _title = this.state.contents[i].title;
        _desc = this.state.contents[i].desc;
        _img = this.state.contents[i].src;
        break;
      }
      i = i + 1;
    }
    return (
      <div>
        <h1>읽고 읽은 책들</h1>
        <Booklist
          onClick={function (id) {
            this.setState({ selected_id: Number(id) });
          }.bind(this)}
          data={this.state.contents}
        ></Booklist>
        <Review title={_title} desc={_desc} src={_img}></Review>
      </div>
    );
  }
}

const contents = [
  {
    id: 1,
    title: "<늦깎이 천재들의 비밀>",
    author: "데이비드 앱스타인",
    date: "21년12월",
    desc: "조각가 미켈란젤로가 대리석 덩어리 앞에 서면 손을 대기도 전에 먼저 완벽한 형상이 머릿속에 떠올랐고, 그냥 나머지 돌을 쪼아 내어 그 안의 형상을 드러냈을 뿐이라는 속설이 널리 퍼져 있다. 대가에 어울리는 아주 멋진 재능이다. 그러나 그 속설은 사실이 아니다. 미켈란젤로는 끊임없이 생각을 바꾸었고, 조각을 하다가 도중에 계획을 바꾸기도 했다. 그의 조각품 중 5분의 3은 미완성으로 남았다",
    src: "https://image.aladin.co.kr/product/23972/84/cover500/8932920303_1.jpg",
  },
  {
    id: 2,
    title: "<강방천의 관점>",
    author: "강방천",
    date: "21년11월",
    desc: "내가 좋은 주식을 고르기 위해 만든 5단계의 계단이 있다. 바로 ‘STEP 5’다. 30년 동안 켜켜이 쌓아온 내 투자의 정수를 오롯이 담아낸 소중한 계단이다. 나는 이 계단을 수도 없이 오르내리면서 위대한 기업을 많이 발견했다. 물론 에셋플러스의 펀드매니저들도 20년간 STEP 5를 활용해 보석 같은 기업들을 발굴해냈다. STEP 5는 본질에 대한 질문이자 그 질문에 대한 답이다. ‘주가는 가치가 결정할까? 그 가치는 다양할까? 그중 우리는 어떤 가치를 추구할까?’ 나는 이 같은 질문을 수없이 했고, 결국 ‘기업의 이익만이 주가를 결정한다’는 답을 찾았다. 그리고 기본적인 이해를 바탕으로 상상력을 발휘해 미래가치를 찾아내려 노력했다",
    src: "https://image.aladin.co.kr/product/26407/6/cover500/8947546984_2.jpg",
  },
  {
    id: 3,
    title: "<데미안>",
    author: "헤르만 헤세",
    date: "21년10월",
    desc: "한 사람 한 사람의 삶은 자기 자신에게로 이르는 길이다. 길의 추구, 오솔길의 암시다. 일찍이 그 어떤 사람도 완전히 자기 자신이 되어본 적은 없었다. 그럼에도 누구나 자기 자신이 되려고 노력한다. 어떤 사람은 모호하게 어떤 사람은 보다 투명하게, 누구나 그 나름대로 힘껏 노력한다",
    src: "https://image.aladin.co.kr/product/26/0/cover500/s742633278_1.jpg",
  },
];

export default App;
