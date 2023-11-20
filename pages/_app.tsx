import { AppProps } from 'next/app'
import '../app/styles/global.scss'


function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}


export default MyApp
