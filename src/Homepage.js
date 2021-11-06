import React from 'react';
import './Homepage.css';  
import TopLinkItem from './TopLinkItem';
import './TopLinksList';
import TopLinksList from './TopLinksList';
import ValuteItem from './ValuteItem';
import PreviewBlock from './PreviewBlock';
import SearchText from './SearchText';
import Banner from './Banner';
import BottomLinksBlock from './BottomLinksBlock';
import WeatherBlock from './WeatherBlock';

export default function Homepage(props) {

  const arrLinks = [
    {
      href: '#',
      text: 'Гермарния'
    },
    {
      href: '#',
      text: 'Франция'
    },
    {
      href: '#',
      text: 'Италия'
    }
  ];
  const arrNewsLink = [
    {
      href: '#',
      text: 'Заголовок новости 1',
      img: 'https://midlandsitesupplies.ie/wp-content/uploads/2018/11/no-default-thumbnail-1.png',
      altImg: 'alt Img'
    },
    {
      href: '#',
      text: 'Заголовок новости 2',
      img: 'https://midlandsitesupplies.ie/wp-content/uploads/2018/11/no-default-thumbnail-1.png',
      altImg: 'alt Img'
    },
    {
      href: '#',
      text: 'Заголовок новости 3',
      img: 'https://midlandsitesupplies.ie/wp-content/uploads/2018/11/no-default-thumbnail-1.png',
      altImg: 'alt Img'
    }
  ];
  const valuteArr = [
    {
      valute: 'USD',
      value: '71,19',
      corr: '+3,11'
    },
    {
      valute: 'EUR',
      value: '91,19',
      corr: '+3,11'
    }
  ];
  const arrCategory = [
    {
      href: '#',
      text: 'Картинки'
    },
    {
      href: '#',
      text: 'Новости'
    },
    {
      href: '#',
      text: 'Авиабилеты'
    }
  ];
  const arrPos = [
    {
      href: '#',
      text: 'Текст посещаемой новости 1'
    },
    {
      href: '#',
      text: 'Текст посещаемой новости 2'
    },
    {
      href: '#',
      text: 'Текст посещаемой новости 3'
    }
  ];
  const arrGer = [
    {
      href: '#',
      text: 'Расписание'
    }
  ];
  const arrEfir = [
    {
      href: '#',
      text: 'зоголовок подкаста 1',
      img: 'https://midlandsitesupplies.ie/wp-content/uploads/2018/11/no-default-thumbnail-1.png',
      altImg: 'alt',
      spanPreview: 'preview text'
    },
    {
      href: '#',
      text: 'зоголовок подкаста 2',
      img: 'https://midlandsitesupplies.ie/wp-content/uploads/2018/11/no-default-thumbnail-1.png',
      altImg: 'alt',
      spanPreview: 'preview text'
    },
    {
      href: '#',
      text: 'зоголовок подкаста 3',
      img: 'https://midlandsitesupplies.ie/wp-content/uploads/2018/11/no-default-thumbnail-1.png',
      altImg: 'alt',
      spanPreview: 'preview text'
    }

  ];
  const arrProg = [
    {
      href: '#',
      text: 'шоу 1',
      time: '11:00',
      spanPreview: 'preview text'
    },
    {
      href: '#',
      text: 'Новости',
      time: '12:00',
      spanPreview: 'preview text'
    },
    {
      href: '#',
      text: 'Шоу 2',
      time: '13:00',
      spanPreview: 'preview text'
    }
  ];
  function mapArrItems(arr, classString) {
    return arr.map((el, ind) => {
      return <TopLinkItem {...el} classString={classString} key={ind}/>
    })
  }
  return (
    <div>
      <div className="topRow">
        <TopLinksList classString={"topLink__list"}>
        {mapArrItems(arrLinks, 'topLink__item')}
        </TopLinksList>
        <span className="date">{new Date().toLocaleDateString()}</span>
      </div>
      <div className="newsBox">
        <TopLinksList classString="newsList">
        {mapArrItems(arrNewsLink, 'news__item')}
        </TopLinksList>
        <div className="valute">
          <TopLinksList classString="valute__list">
          {valuteArr.map((el, ind) => {
            return <ValuteItem {...el} classString={'valute__item'} key={ind}/>
          })}
          </TopLinksList>
        </div>
        <PreviewBlock 
          img={"https://midlandsitesupplies.ie/wp-content/uploads/2018/11/no-default-thumbnail-1.png"}
          altImg={"alt"}
          previewText={"Preview text"}
          linkText="link Text"
          href="#" />
      </div>
      <div className="searchBlock">
        <TopLinksList classString={"categoty__list"}>
          {mapArrItems(arrCategory, 'category__item')}
        </TopLinksList>
        <div className="searchInputBlock">
          <img src="https://midlandsitesupplies.ie/wp-content/uploads/2018/11/no-default-thumbnail-1.png" className="logo" />
          <input type="text" />
          <button className="search">найти</button>
          <SearchText phrase={"кедровые орехи"} />
        </div>
      </div>
      <Banner href={"#"} img={"https://midlandsitesupplies.ie/wp-content/uploads/2018/11/no-default-thumbnail-1.png"} altImg={"altImg"} />
      <div className="bottomLinks">
          <BottomLinksBlock href={"#"} title={"Погода"}>
            <WeatherBlock 
              img={"https://midlandsitesupplies.ie/wp-content/uploads/2018/11/no-default-thumbnail-1.png"} 
              altImg={"altImg"}
              temperature={"5"}
              mTemp={"3"}
              dTemp={"5"} />
          </BottomLinksBlock>
          <BottomLinksBlock href={"#"} title={"Карта Германии"}>
            <TopLinksList classString={"bottom__list"}>
              {mapArrItems(arrGer, 'pos_link')}
            </TopLinksList>
          </BottomLinksBlock>
          <BottomLinksBlock href={"#"} title={"Эфир"}>
            <TopLinksList classString={"bottom__list"}>
              {mapArrItems(arrEfir, 'pos_link')}
            </TopLinksList>
          </BottomLinksBlock>
          <BottomLinksBlock href={"#"} title={"Посещаемое"}>
            <TopLinksList classString={"bottom__list"}>
              {mapArrItems(arrPos, 'pos_link')}
            </TopLinksList>
          </BottomLinksBlock>
          <BottomLinksBlock href={"#"} title={"Телепрограмма"}>
            <TopLinksList classString={"bottom__list"}>
              {mapArrItems(arrProg, 'pos_link')}
            </TopLinksList>
          </BottomLinksBlock>
      </div>
    </div>
  )
}
