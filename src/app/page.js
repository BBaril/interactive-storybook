"use client";

import { useState, useRef } from "react";

export default function Home() {
    const [story, setStory] = useState({
        text: "You wake up in a mysterious forest. Paths lead in two directions.",
        image: "/forest.png",
        choices: [
            { text: "Go left", next: "leftPath" },
            { text: "Go right", next: "rightPath" }
        ]
    });

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const handlePlayMusic = () => {
        if (audioRef.current) {
            audioRef.current.volume = 0.1; // Adjust volume (0.0 - 1.0)
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const storyData = {
        leftPath: {
            text: "You walk down a dark path and see a glowing cave.",
            image: "/cave.png",
            choices: [
                { text: "Enter the cave", next: "cave" },
                { text: "Turn back", next: "rightPath" }
            ]
        },
        rightPath: {
            text: "You walk towards a river. A boat waits nearby.",
            image: "/boat.png",
            choices: [
                { text: "Take the boat", next: "boat" },
                { text: "Follow the riverbank", next: "frogs" }
            ]
        },
        cave: {
            text: "Inside the cave, you find a dimly lit chamber with two paths. One leads up with no visibility. The other has a steady glow deeper into the cave.",
            image: "/twoPaths3.png",
            choices: [
                { text: "Head up into the darkness", next: "treasure" },
                { text: "Head down deeper", next: "pool" }
            ]
        },
        boat: {
            text: "The boat takes you to a new land. A new adventure begins... ",
            image: "/adventure.Land.png",
            choices: []
        },
		frogs: {
            text: "After a short stroll you encounter a group of frogs. It appears they are building something. A few of them are trying to move a big branch.",
            image: "/workingFrogs.fix.png",
            choices: [
                { text: "Help", next: "help" },
                { text: "Turn around", next: "rightPath2" }
            ]
        },
		rightPath2: {
			text: "You walk towards a river. A boat waits nearby.",
            image: "/boat.png",
            choices: [
                { text: "Take the boat", next: "boat" },
                { text: "Head back into the woods", next: "leftPath" }
            ]
		},
		help: {
            text: "You carefully reach over and help lift the branch into place. The frogs are jumping around and seem happy. As you turn around to head back, a Guardian Amphibian hops over and hands you a small bottle of a glowing liquid. You nod.",
            image: "/guardianFrog4.png",
            choices: [
                { text: "You head back to the river", next: "rightPath" }
            ]
        },
		treasure: {
            text: "You journey up a long ever-narrowing path. It's a dead end.",
            image: "/deadEnd.png",
            choices: [
                { text: "Turnaround", next: "chamber2" },
                { text: "Take a moment", next: "crack" }
            ]
        },
        crack: {
            text: "You lean up against the wall and notice a large crack hidden behind a boulder. You squeeze in to discover a hidden treasure room. Congratulations! You collect what you can and leave.",
            image: "/treasure.png",
            choices: [
                { text: "Head out of the cave", next: "start" },
                { text: "Head back to the chamber", next: "chamber2" }
            ]
        },
        chamber2: {
            text: "You are in the chamber again.",
            image: "/twoPaths3.png",
            choices: [
                { text: "Try the other path", next: "pool" },
                { text: "Head out of the cave", next: "start" }
            ]
        },
		pool: {
            text: "You find a magical sanctuary. The rocks are covered in glowing fungi. The water is illuminated by glowfish sprites. You sit and relax to notice off in the distance is movement.",
            image: "/pool.fix4.png",
            choices: [
                { text: "Enjoy the shimmering patterns", next: "poolSide" },
                { text: "Get up", next: "turtle" }
            ]
        },
		poolSide: {
			text: "After a while you feel revitalized and head out.",
			image: "/pool2.png",
			choices: [
				{ text: "Head out of the cave", next: "start" },
				{ text: "Stop in the chamber", next: "chamber" }
			]
		},
		turtle: {
            text: "Walking over you notice the movement is a few crystal turtles. You smile and so does the biggest turtle. You ponder the possibility.",
            image:"/crystalTurtles.png",
            choices: [
                { text: "Turn around", next: "chamber" },
                { text: "Wave", next: "wave" }
            ]
        },
		wave: {
			text: "The turtles start to move in your direction. You are taken aback by the immense amount of energy coming from them.",
			image:"/turtleSmile.png",
			choices: [
				{ text: "Sit down by the water", next: "sit" },
				{ text: "Slowly you walk backwards out", next: "chamber" }
			]
		},
		chamber: {
			text: "You are in the chamber again.",
			image: "/twoPaths3.png",
			choices: [
				{ text: "Try the other path", next: "treasure" },
				{ text: "Head out of the cave", next: "start" }
			]
		},
		sit: {
			text: "You notice one of the turtles has a leaf hanging out of his mouth. As the turtles make there way over, you gather a few in a pile. The turtles enjoy. As you relax, you begin to feel increasing energy. The turtles finish up. You head out.",
			image: "/eatingTurtles.png",
			choices: [
				{ text: "Try the other path", next: "treasure" },
				{ text: "Head out of the cave", next: "start" }
			]
		},
        start: {
            text: "You find yourself in a mysterious forest. Paths lead in two directions.",
            image: "/forest.png",
            choices: [
                { text: "Go left", next: "leftPath" },
                { text: "Go right", next: "rightPath" }
            ]
        }
    };

    function handleChoice(next) {
        setStory(storyData[next]);
    }
  // Music by <a href="https://pixabay.com/users/lucafrancini-19914739/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=197736">Luca Francini</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=197736">Pixabay</a>
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
            {/* Background Music */}
            <audio ref={audioRef} loop>
                <source src="/calm-fantasy-harp-and-strings-197736.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            {/* Play Music Button */}
            {!isPlaying && (
                <button
                    onClick={handlePlayMusic}
                    className="mb-4 px-4 py-2 bg-green-500 hover:bg-green-700 rounded text-white"
                >
                    Play Background Music
                </button>
            )}
            <div className="max-w-2xl p-6 bg-gray-800 rounded-xl shadow-lg text-center">
                <img src={story.image} alt="Story Scene" className="w-full max-h-80 object-cover rounded-lg shadow-lg mb-4" />
                <p className="text-lg">{story.text}</p>
                <div className="mt-4">
                    {story.choices.map((choice, index) => (
                        <button
                            key={index}
                            onClick={() => handleChoice(choice.next)}
                            className="m-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded text-white"
                        >
                            {choice.text}
                        </button>
                    ))}
                </div>
            </div>
        </main>
    );
}