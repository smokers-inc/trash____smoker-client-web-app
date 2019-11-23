/**
 * 共通で利用するカラー定義をしておくクラス
 */
enum CommonColor {
  // noinspection JSUnusedGlobalSymbols
  DEFAULT = '#333333',
  MODIFY = '#757575',
  HINT = '#9e9e9e',
  BACKGROUND = 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 51.99%), #ECEFF1',
  BASE = '#ffffff',
  KEY_COLOR = '#029FAC',
  SUB_COLOR = '#007A82',
  SUB_HEADING = '#f1a534',
  SUB_HEADING2 = '#f6c63c',
  // ERROR = '#ee2626',

  // ガイドライン下部のグラデーション部分（greyはわかったけど他は名前ほしい）
  SHADE1_900 = '#363A62',
  SHADE1_800 = '#3D446F',
  SHADE1_700 = '#464E7B',
  SHADE1_600 = '#4C5583',
  SHADE1_500 = '#535E8C',
  SHADE1_400 = '#6B759B',
  SHADE1_300 = '#858EAC',
  SHADE1_200 = '#A6AEC5',
  SHADE1_100 = '#C8CDDD',
  SHADE1_50 = '#EAEBF1',

  SHADE2_900 = '#263238',
  SHADE2_800 = '#37474F',
  SHADE2_700 = '#455A64',
  SHADE2_600 = '#546E7A',
  SHADE2_500 = '#607D8B',
  SHADE2_400 = '#78909C',
  SHADE2_300 = '#90A4AE',
  SHADE2_200 = '#B0BEC5',
  SHADE2_100 = '#CFD8DC',
  SHADE2_50 = '#ECEFF1',

  // @material-ui/core/colors/greyと同じなのでgrey['900']とかでも取得できるけど、それやりだすと自由になんでも使えちゃうのでここに定義
  GREY_900 = '#212121',
  GREY_800 = '#424242',
  GREY_700 = '#616161',
  GREY_600 = '#757575',
  GREY_500 = '#9E9E9E',
  GREY_400 = '#BDBDBD',
  GREY_300 = '#E0E0E0',
  GREY_200 = '#EEEEEE',
  GREY_100 = '#F5F5F5',
  GREY_50 = '#FAFAFA',

  /* 赤坂さんデザイン（Guideline以外）から抽出 */
  LOGIN_INPUT_BORDER = '#b1b4be',
  MODERATE = '#8187A0',
  LOGIN_ORGANIZATION_SELECTION_BACKGROUND = '#f0f1f2',

  INFO = '#2196F3',
  INFO_DARK = '#1769aa',
  INFO_LIGHT = '#4dabf5',
  INFO_CONTRAST = '#ffffff',

  SUCCESS = '#4CAF50',
  SUCCESS_DARK = '#357a38',
  SUCCESS_LIGHT = '#6fbf73',
  SUCCESS_CONTRAST = '#ffffff',

  WARNING = '#FFB300',
  WARNING_DARK = '#b27d00',
  WARNING_LIGHT = '#ffc233',
  WARNING_CONTRAST = '#ffffff',

  ERROR = '#F4304F',
  ERROR_DARK = '#aa2137',
  ERROR_LIGHT = '#f65972',
  ERROR_CONTRAST = '#ffffff',

  LIGHT_GREEN = '#4CAC02',

  /* 赤坂さんデザインGuidelineから抽出した色の、lightとdarkとcontrastText */
  KEY_COLOR_LIGHT = '#34b2bc',
  KEY_COLOR_DARK = '#016f78',
  KEY_COLOR_CONTRAST = '#ffffff',
  SUB_HEADING_LIGHT = '#f3b75c',
  SUB_HEADING_DARK = '#a87324',
  SUB_HEADING_CONTRAST = '#000000',
  PURPLE = '#9b0191',
  PURPLE_LIGHT = '#af33a7',
  PURPLE_DARK = '#6c0065',

  /* せとぅ （出処が分かったら移動）*/
  NOTIFICATION = '#C8E9EB',
  NO_IMG_GRAY = '#C4C4C4',
  // TODO 命名
  TIME = '#A0A0A0',
  SPACE = '#101321',

  MenuButton = "#1a1a21",
  Success = "#4CAF50",
}

export default CommonColor;
