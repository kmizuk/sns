import React from "react";
//template
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
//新規の友達申請通知
import NotificationsIcon from "@material-ui/icons/Notifications";
//その数を示すバッジ
import Badge from "@material-ui/core/Badge";
//ログアウト
import { FiLogOut } from "react-icons/fi";
//クッキー
import { withCookies } from "react-cookie";

//CSSを定義→他の場所で呼び出す
const useStyles = makeStyles((theme) => ({
  bg: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  //classesで呼び出せるように
  const classes = useStyles();
  const Logout = () => {
    //ログアウト時にクッキーを削除
    props.cookies.remove("current-token");
    //URLがルートのパスに戻るように
    window.location.href = "/";
  };

  return (
    //SemanticではNavbarがAppbarの名前で使われている
    <AppBar position="static">
      <Toolbar>
        {/* 属性付与 */}
        <Typography variant="h5" className={classes.title}>
          SNS APP
        </Typography>
        {/* バッジ作成、３はダミー */}
        <Badge className={classes.bg} badgeContent={3} color="secondary">
          <NotificationsIcon />
        </Badge>
        <button className="signOut" onClick={Logout()}>
          <FiLogOut />
        </button>
      </Toolbar>
    </AppBar>
  );
};

export default withCookies(Navbar);
