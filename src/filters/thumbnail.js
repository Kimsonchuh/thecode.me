// 七牛图片缩略图过滤器，用于将图片url加入七牛的图片处理参数
module.exports = (value, size) => {
  let width = 120;
  let height = 120;
  // 如是为空，则返回默认占位图
  if (value === undefined || value === '') {
    return '/static/images/placeholder_image.png';
  // 加入参数七牛的图片处理参数
  } else if (value.indexOf(process.env.DOMAIN_NAME) > -1 ||
    value.indexOf('clouddn.com') > -1 || value.indexOf('qnssl.com') > -1) {
    if (size !== undefined) {
      width = size;
      height = size;
    }
    return `${value}?imageView2/2/w/${width}/h/${height}`;
  }
  return value;
};
