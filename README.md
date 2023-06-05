# ReNewHouse

We want to model the service offered by a house renovation company to its clients. The house renovation company service relies on the services offered by a set of plumbers, electrician, constructors, painters, furniture providers and designers.\
Based on the requests of the client (the householder), contact them and select the best ones.

## Members:

- Carmine Alberto, 10560934
- Ernest Šembera, 10920794

## Thought processes, notes

https://docs.google.com/document/d/12CEGEP-12oZSZT4RzRTu5NgYURmtXNZGeAaubvGmLhI/edit?usp=sharing

## Choreographed process

This is an elicopter view of the process managed by the house renovation company:

- Process starts with the request of the house holder
- The house renovation company contacts the plumber, electrician, constructor, painter, furniture provider or designer, depending on the house holder's request
- The house renovation company waits for the response of the contacted service provider
- The house renovation company chooses the best offer and sends it to the house holder
- The house holder accepts or rejects the offer
- If the offer is accepted, the house renovation company contacts the service provider and the service provider starts the work
- The process end when the work is finished or when the house holder rejects the offer

![Choreography Model](/Choreography.png)

# Third party services

- Plumber
- Electrician
- Constructor
- Designer
- Painter
- Furniture provider

## Collaboration Diagram

place here an image of the BPMN Collaboration diagram, where the only white box is for the House Renovation Co, the others will be black-boxes

## Executable process

place here an image of the BPMN diagram corresponding to the executable model of the House Renovation Co process

## Petri Net

place here the image of the PetriNet corresponding to the House Renovation Co executable model
