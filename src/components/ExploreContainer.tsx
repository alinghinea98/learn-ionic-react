import './ExploreContainer.css';
import {
	IonButton,
	IonCard, IonCardContent,
	IonCol,
	IonGrid,
	IonIcon,
	IonInput,
	IonItem,
	IonLabel,
	IonRow,
} from '@ionic/react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersLIst, setUsersList } from '../features/userSlice';
import { getUsers } from '../api/user';
import currentVideo from '../videos/sample.mp4';

interface ContainerProps {
}

const ExploreContainer: React.FC<ContainerProps> = () => {
	
	const users = useSelector(getUsersLIst);
	const dispatch = useDispatch();
	const refresh = () => {
		getUsers().then((list) => {
			dispatch(setUsersList(list))
		})
	};
	useEffect(() => {
		console.warn(users);
		if (!users.length) refresh();
	}, [users]); //onInit
	
	const weightInput = useRef<HTMLIonInputElement>(null);
	const heightInput = useRef<HTMLIonInputElement>(null);
	
	const [bmiValue, setBmi] = useState<number>();
	
	const calculateBMI = () => {
		const enteredWeight = weightInput.current!.value;
		const enteredHeight = heightInput.current!.value;
		if (!enteredWeight || ! enteredHeight) return;
		const BMI = +enteredWeight / (+enteredHeight * +enteredHeight);
		setBmi(BMI);
	};
	
	const clearInputs = () => {
		weightInput.current!.value = ''; // this code will never run without a valid object being stored in this reference
		heightInput.current!.value = '';
	};
	
	return (
		<div className="container">
			<IonGrid>
				{/*<IonRow>*/}
				{/*	<IonCol>*/}
				{/*		<IonItem>*/}
				{/*			<IonLabel position="floating">Your height</IonLabel>*/}
				{/*			<IonInput ref={heightInput}></IonInput>*/}
				{/*		</IonItem>*/}
				{/*	</IonCol>*/}
				{/*</IonRow>*/}
				{/*<IonRow>*/}
				{/*	<IonCol>*/}
				{/*		<IonItem>*/}
				{/*			<IonLabel position="floating">Your weight</IonLabel>*/}
				{/*			<IonInput ref={weightInput}></IonInput>*/}
				{/*		</IonItem>*/}
				{/*	</IonCol>*/}
				{/*</IonRow>*/}
				{/*<IonRow>*/}
				{/*	<IonCol className="ion-text-left">*/}
				{/*		<IonButton onClick={calculateBMI}>*/}
				{/*			<IonIcon slot="start" icon={calculatorOutline}/>*/}
				{/*			Calculate*/}
				{/*		</IonButton>*/}
				{/*	</IonCol>*/}
				{/*	<IonCol className="ion-text-right">*/}
				{/*		<IonButton onClick={clearInputs}>*/}
				{/*			<IonIcon slot="start" icon={refreshOutline}/>*/}
				{/*			Reset*/}
				{/*		</IonButton>*/}
				{/*	</IonCol>*/}
				{/*</IonRow>*/}
				<IonRow>
					<IonCol className="grid-center">
						<video
							loop
							muted
							controls
							autoPlay>
							<source src={currentVideo} type='video/mp4'/>
						</video>
					</IonCol>
				</IonRow>
				{bmiValue && (<IonRow>
					<IonCol>
						<IonCard>
							<IonCardContent>
								<h2>{bmiValue}</h2>
							</IonCardContent>
						</IonCard>
					</IonCol>
				</IonRow>)}
			</IonGrid>
		</div>
	);
};

export default ExploreContainer;

/*
Why we need state?
Well, we need to change data in this component dynamically and reflect that changes in or JSX code and therefore in the DOM
This is why we use state here
* */
/*ngIf === with this in React
* 				{bmiValue && (<IonRow>
					<IonCol>
						<IonText>2:01:20</IonText>
						<IonCard>
							<IonCardContent>
								<h2>{bmiValue}</h2>
							</IonCardContent>
						</IonCard>
					</IonCol>
				</IonRow>)}*/
