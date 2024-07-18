function importAll(r) {
    let img = {};
    r.keys().forEach((item, index) => {
        img[item.replace('./', '')] = r(item);
    });
    return img;
}

const img = importAll(require.context('../../assets/images/articles', false, /\.(png|jpe?g|svg)$/));

export default img;