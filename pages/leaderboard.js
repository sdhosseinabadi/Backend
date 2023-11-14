import React, { useState, useEffect } from "react";
// import { withStyles, makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import Avatar from "@material-ui/core/Avatar";
import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import Backdrop from "@material-ui/core/Backdrop";
// import CircularProgress from "@material-ui/core/CircularProgress";

import {
    faGithub,
    // faGithubSquare,
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const columns = [
  { id: "position", label: "Rank", minWidth: 50 },
  { id: "avatar", label: "Avatar", minWidth: 50 },
  { id: "username", label: "GitHub Username", minWidth: 170 },

  {
    id: "prnums",
    label: "No. Of PRs",
    minWidth: 100,
    align: "center",
  },
  {
    id: "score",
    label: "Score",
    minWidth: 100,
    align: "right",
  },
];

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//     cursor: "pointer",
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

// const useStyles = makeStyles((theme) => {
//   return {
//     root: {
//       width: "100%",
//     },
//     container: {
//       maxHeight: 440,
//     },
//     appbar: {
//       padding: 25,
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       background: "black",
//     },
//     leaderimg: {
//       width: 100,
//       borderRadius: 1000,
//       [theme.breakpoints.down(1200)]: {
//         width: 50,
//       },
//     },
//     leaderimgbig: {
//       width: 150,
//       borderRadius: 1000,
//       [theme.breakpoints.down(1200)]: {
//         width: 90,
//       },
//     },
//     popover: {
//       pointerEvents: "none",
//     },
//     levelbadge: {
//       padding: 10,
//       borderRadius: 5,
//       backgroundColor: "#f5f5f5",
//       marginRight: 10,
//       alignItems: "center",
//       justifyContent: "center",
//       fontSize: 12,
//       fontWeight: "bold",
//     },
//     leaders: {
//       [theme.breakpoints.down(1200)]: {
//         padding: "0px 50px",
//         fontSize: "12px",
//       },
//       [theme.breakpoints.down(700)]: {
//         padding: "0px 0px",
//       },
//     },
//     mainroot: {
//       paddingLeft: 100,
//       paddingRight: 100,
//       paddingTop: 0,
//       paddingBottom: 50,
//       textAlign: "center",
//       [theme.breakpoints.down(1200)]: {
//         padding: 20,
//       },
//     },
//     backdrop: {
//       zIndex: theme.zIndex.drawer + 1,
//       color: "#fff",
//     },
//   };
// });

function Leaderboard() {
  // const classes = useStyles();
  let [leaderss, setLeaderss] = useState({});
  let [links, setLinks] = useState("");
  let [login, setLogin] = useState("");
  let [score, setScore] = useState("");
  let [avatar, setAvatar] = useState("");
  let [lastupdated, setLastupdated] = useState("");
  const [openn, setOpenn] = React.useState(true);
  let rows = [];
  function createData(
    username,
    avatar,
    prnums,
    score,
    prlinks,
    level0,
    level1,
    level2,
    level3,
    level4
  ) {
    return {
      username,
      avatar,
      prnums,
      score,
      prlinks,
      level0,
      level1,
      level2,
      level3,
      level4,
    };
  }
  useEffect(() => {
    fetch("https://gssoc22-leaderboard.herokuapp.com/OSLeaderboard")
      .then((res) => res.json())
      .then((data) => {
        data.leaderboard.sort(function (a, b) {
          return (
            b.score - a.score ||
            b.level4 - a.level4 ||
            b.level3 - a.level3 ||
            b.level2 - a.level2 ||
            b.level1 - a.level1 ||
            b.level0 - a.level0 ||
            a.login < b.login
          );
        });
        setLeaderss(data.leaderboard);
        setOpenn(false);
        setLastupdated(data.updatedTimestring);
      });
  }, []);

  for (let leader in leaderss) {
    rows.push(
      createData(
        [leaderss[leader].login, leaderss[leader].url],
        leaderss[leader].avatar_url,
        leaderss[leader].pr_urls.filter((item, i, ar) => ar.indexOf(item) === i)
          .length,
        leaderss[leader].score,
        leaderss[leader].profile_url,
        leaderss[leader].pr_urls,
        leaderss[leader].level0,
        leaderss[leader].level1,
        leaderss[leader].level2,
        leaderss[leader].level3,
        leaderss[leader].level4
      )
    );
  }

  const [open, setOpen] = React.useState(false);
  let prlinks = [];
  let handleClickOpen = (num) => {
    setOpen(true);
    for (let link in leaderss[num].pr_urls) {
      prlinks.push(leaderss[num].pr_urls[link] + "\n\n\n\n");
    }
    let unique = prlinks.filter((item, i, ar) => ar.indexOf(item) === i);
    setLinks(unique);
    // setLeveldata({
    //     level0: leaderss[num].level0,
    //     level1: leaderss[num].level1,
    //     level2: leaderss[num].level2,
    //     level3: leaderss[num].level3,
    //     level4: leaderss[num].level4,
    // });
    setLogin(leaderss[num].login);
    setAvatar(leaderss[num].avatar_url);
    setScore(leaderss[num].score);
  };

  const handleClose = () => {
    prlinks = [];
    setOpen(false);
  };
  return (
    <>
      <div className="container transition-colors mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-10 lg:px-20 2xl:px-32 dark:bg-darkmode_gray-0 dark:transition-colors ">
        <div className="items-center justify-center">
          <div className="font-sans text-center text-2xl font-extrabold">
            <div className="text-black dark:text-white text-4xl text center font-extrabold mb-10 underline underline-offset-4 decoration-primary_orange-0">
              <span className="text-primary_orange-0"> GSSoC 2022 </span>
              Top Performers
            </div>
          </div>
        </div>
        <div>
          {/* <Backdrop className={classes.backdrop} open={openn}>
            <CircularProgress color="inherit" />
          </Backdrop> */}
          <div className="py-5 px-0 xl:pb-12 xl:px-24 xl:pt-0 text-center">
            <div className="flex md:flex-row justify-between gap-y-1 gap-x-1 md:gap-x-2 items-center my-10">
              <div className="bg-white shadow-2xl dark:bg-black rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4 relative inline-block w-28 md:w-auto">
                <img
                  className="w-12 md:w-16 lg:w-24 rounded-full m-auto inline-block object-cover bg-white"
                  src={rows[1] !== undefined ? rows[1].avatar : null}
                />
                  <FontAwesomeIcon className="invisible lg:visible w-8 h-8 rounded-full border-5 border-white absolute bottom-1/4 right-1/4 bg-amber-300 inline-block" icon={faGithub} size="2x" />
                <h3 className="text-black dark:text-primary_orange-0 font-semibold mt-2 text-xs sm:text-sm md:text-md">
                  2. {rows[1] !== undefined ? rows[1].username[0] : null}
                </h3>
              </div>
              <div className="bg-white shadow-2xl dark:bg-black rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4  relative inline-block w-28 md:w-auto">
                <img
                  className="w-12 md:w-16 lg:w-40 rounded-full m-auto bg-white"
                  src={rows[1] !== undefined ? rows[0].avatar : null}
                />
                <FontAwesomeIcon className="invisible lg:visible w-10 h-10 rounded-full border-5 border-white absolute bottom-1/4 right-1/4 bg-cyan-200 inline-block" icon={faGithub} size="3x" />
                <h3 className="text-black dark:text-primary_orange-0 font-semibold mt-4 text-xs sm:text-sm md:text-md">
                  1. {rows[1] !== undefined ? rows[0].username[0] : null}
                </h3>
              </div>
              <div className="bg-white shadow-2xl dark:bg-black rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4 relative inline-block w-28 md:w-auto">
                <img
                  className="w-12 md:w-16 lg:w-24 rounded-full m-auto bg-white"
                  src={rows[1] !== undefined ? rows[2].avatar : null}
                />
                <FontAwesomeIcon className="invisible lg:visible w-8 h-8 rounded-full border-5 border-white absolute bottom-1/4 right-1/4 bg-zinc-100 inline-block" icon={faGithub} size="2x" />
                <h3 className="text-black dark:text-primary_orange-0 font-semibold mt-2 text-xs sm:text-sm md:text-md">
                  3. {rows[1] !== undefined ? rows[2].username[0] : null}
                </h3>
              </div>
            </div>

            <div className="bg-sky-100 dark:bg-orange-200 px-1.5 py-1.5 rounded-md mb-3">
              <p className="text-sky-700 dark:text-orange-900 text-sm">
                The leaderboard was last updated on: <b>{lastupdated}</b>
              </p>
            </div>

            {/* <Paper> */}
              <div className="w-full overflow-x-auto" /*component={Paper}*/>
                <div className="table w-full">
                  <div className="table-header-group ">
                    <div className="table-row">
                      {columns.map((column) => (
                        <div
                          className="table-cell font-serif px-4 py-4 bg-black text-white dark:bg-primary_orange-0 dark:text-black"
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="table-row-group">
                    {rows.map((row, i) => {
                      return (
                        // style = {{ display: rows.indexOf(row) === 0 || rows.indexOf(row) === 1 || rows.indexOf(row) === 2 ? "none" : null }
                        <>
                        {(i%2)?(
                            <div
                            className="table-row"
                            role="checkbox"
                            tabIndex={-1}
                            key={row.username}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <div
                                  className="table-cell px-4 py-2 bg-orange-50 text-black  dark:bg-neutral-900 dark:text-white font-medium"
                                  key={column.id}
                                  align={column.align}
                                  onClick={() => {
                                    handleClickOpen(rows.indexOf(row));
                                  }}
                                >
                                  {column.id === "avatar" ? (
                                    <img
                                      className="w-9 rounded-full m-auto bg-white"
                                      src={value}
                                    />
                                  ) : column.id === "position" ? (
                                    rows.indexOf(row) + 1
                                  ) : column.id === "username" ? (
                                    <div className="flex relative left-0 md:left-12 lg:left-32">
                                    <FontAwesomeIcon  className="mr-5" icon={faGithub} size="2x" />
                                      <a
                                        href={value[1]}
                                        className="no-underline"
                                      >
                                        {value[0]}
                                      </a>
                                    </div>
                                  ) : (
                                    value
                                  )}
                                </div>
                              );
                            })}
                          </div>
                          ):(
                            <div
                            className="table-row"
                            role="checkbox"
                            tabIndex={-1}
                            key={row.username}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <div
                                  className="table-cell px-4 py-2 bg-leaderboardbg-0 text-black dark:bg-black dark:text-white font-medium"
                                  key={column.id}
                                  align={column.align}
                                  onClick={() => {
                                    handleClickOpen(rows.indexOf(row));
                                  }}
                                >
                                  {column.id === "avatar" ? (
                                    <img
                                      className="w-9 rounded-full m-auto bg-white"
                                      src={value}
                                    />
                                  ) : column.id === "position" ? (
                                    rows.indexOf(row) + 1
                                  ) : column.id === "username" ? (
                                    <div className="flex relative left-0 md:left-12 lg:left-32">
                                    <FontAwesomeIcon  className="mr-5" icon={faGithub} size="2x" />
                                      <a
                                        href={value[1]}
                                        className="no-underline"
                                      >
                                        {value[0]}
                                      </a>
                                    </div>
                                  ) : (
                                    value
                                  )}
                                </div>
                              );
                            })}
                          </div>
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            {/* </Paper> */}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <div className="flex m-0 py-4 px-6 font-medium text-lg leading-relaxed" id="alert-dialog-slide-title">
                {login + "'s Stats"}
              </div>
              <div className="flex-auto py-2 px-6 overflow-y-auto">
                <div id="alert-dialog-slide-description">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      alt="Remy Sharp"
                      src={avatar}
                      className="w-12 rounded-full xl:w-24"
                    />
                    <p
                      className="w-24 rounded-full xl:w-36 p-3 text-center"
                      style={{
                        backgroundColor: "#ebfaeb",
                        marginLeft: 20,
                        fontSize: 25,
                      }}
                    >
                      🏆 {score}
                    </p>
                  </div>
                  <div style={{ marginTop: 30 }}>List Of PRs: </div>
                  {links}
                </div>
              </div>
              <div className="flex px-2 py-2 items-center justify-end">
                <button
                  onClick={handleClose}
                  color="primary"
                  style={{
                    background: "#FA6329",
                    border: "none",
                    padding: 15,
                    color: "white",
                    borderRadius: 5,
                    cursor: "pointer",
                  }}
                >
                  Close
                </button>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
