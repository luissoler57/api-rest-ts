import app from './app'
import './config/mongo'

app.listen(app.get('port'), () =>
  console.log(`Server is listen on port ${app.get('port')}`)
)
