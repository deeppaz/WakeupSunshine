import React from 'react';
import { ScrollView, View } from 'react-native';
import { Layout, Section, SectionContent, Text, TopNav } from 'react-native-rapi-ui';

export default function About({ navigation }) {
	return (
		<Layout>
			<ScrollView>
			<TopNav middleContent="About"  />
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Section>
					<SectionContent style={{margin: 20}}>
						<Text style={{fontSize: 20, paddingBottom: 15}}>About Wakeup Sunshine</Text>
						<Text >Wakeup Sunshine: Waking up with the gentle embrace of morning light is a serene and rejuvenating experience. As the first rays of sunlight filter through the curtains, they cast a warm and inviting glow across the room, coaxing you out of slumber with a sense of tranquility. 
						</Text>
						<Text style={{paddingTop: 15}}>
						The soft, golden hues of dawn gradually fill the space, dispelling the darkness of night and bringing the promise of a new day. It's a natural and subtle awakening, as if the world itself is gently nudging you to rise and greet the world. 

						</Text>
						<Text style={{paddingTop: 15}}>
						The ambient illumination dances on the walls, creating a serene ambiance that seems to whisper, "It's time to start anew." Waking up to light in the morning infuses the moment with a sense of hope and anticipation, setting the tone for a fresh beginning and the endless possibilities that each day

						</Text>
					</SectionContent>
				</Section>
			</View>
			</ScrollView>
		</Layout>
	);
}
