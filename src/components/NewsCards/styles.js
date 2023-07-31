import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  body:{
    backgroundColor: 'red'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '45vh',
    padding: '10%',
    borderRadius: 10,
    color: 'white',
    transition: '0.3s',
    border:'solid black 1px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',

    '&:hover': {
      transform: "scale3d(1.05, 1.05, 1)",
    }
  },
  infoCard: {
    display: 'flex', flexDirection: 'column', textAlign: 'center',
    color: 'white',
    '&:hover': {
      transform: "scale3d(1.05, 1.05, 1)",
    },
  },
  container: {
    padding: '0 5%', width: '100%', margin: 0,
  },
});
