import React from 'react';
import styles from './style.less';
import newsImg from 'assets/news/news.jpg';
import Arrow from 'components/Arrow';
import { _t } from 'utils/lang';
import { connect } from 'dva';
import Html from 'components/Html';

const NewsDetail = props => {
  const { detailData, setDetailShowCallback } = props;
  return (
    <div className={styles['detail']}>
      <div
        onClick={() => {
          setDetailShowCallback(false);
        }}
        className={styles['detail-return']}
      >
        <Arrow left={true} />
        <span>{_t('news.return')}</span>
      </div>
      <div className={styles['detail-title']}>{detailData.title.rendered}</div>
      <div className={styles['detail-dateType']}>{new Date(detailData.date).toLocaleString()}</div>
      <div className={styles['detail-imgBox']}>
        <img src={newsImg} alt="" />
      </div>
      <div className={styles['detail-content']}>
        <Html>{detailData.content.rendered}</Html>
      </div>
    </div>
  );
};

export default connect(state => {
  return {
    detailData: state.news.detailData,
  };
})(NewsDetail);
