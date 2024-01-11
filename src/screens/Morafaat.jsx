import { SafeAreaView, StyleSheet, useWindowDimensions } from "react-native"
import Pdf from 'react-native-pdf';
import tw from "twrnc"

const UseStyles = () => {
    const { width, height } = useWindowDimensions()

    const styles = StyleSheet.create({
        pdf: {
            width: width,
            height: height
        }
    })
    return styles
}
const Morafaat = () => {
    const styles = UseStyles()
    const source = { uri: "https://egyls.com/wp-content/uploads/2020/10/%D8%B4%D8%B1%D8%AD-%D9%82%D8%A7%D9%86%D9%88%D9%86-%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%81%D8%B9%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%AF%D9%86%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D9%8A%D8%A9.pdf", cache: true }
    return (
        <>
            <SafeAreaView style={tw`bg-white flex-1 items-center justify-center`}>
                <Pdf
                    trustAllCerts={false}
                    style={[tw`flex-1`, styles.pdf]}
                    source={source}
                    onLoadComplete={(numberOfPages, filePath) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page, numberOfPages) => {
                        console.log(`Current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link pressed: ${uri}`);
                    }}
                />
            </SafeAreaView>
        </>
    )
}
export default Morafaat