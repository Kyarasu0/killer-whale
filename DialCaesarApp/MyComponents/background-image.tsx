import React from 'react';

const BackgroundImageComponent: React.FC = () => {
  const backgroundImageUrl = 'https://png.pngtree.com/background/20210709/original/pngtree-technology-background-technological-sense-science-fiction-modern-picture-image_926081.jpg'; // 背景画像のURLを指定

  const styles = {
    container: {
      width: '100%',
      height: '100vh', // 画面全体を覆う
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: 'cover', // 画像をコンテナ全体にカバー
      backgroundPosition: 'center', // 中央に配置
    } as React.CSSProperties,
  };

  return (
    <div style={styles.container}>
      <h1>背景画像が適用されているコンポーネント</h1>
    </div>
  );
};

export default BackgroundImageComponent;
