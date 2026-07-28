"use client";
import { useState, useEffect } from "react";
type statusCache = {
    status: string,
    timeStamp: number | null
}
const cacheExpiry = 40_000;
export function StatusComponent() {
    const [status, setStatus] = useState("Loading status ...");

    useEffect(() => {
        let shouldFetchStatus = false;
        let previousSave:statusCache;
        if (typeof window !== 'undefined') {
            previousSave = JSON.parse(localStorage.getItem('footerStatusCache') ?? `{"status":"Loading status ...","timeStamp":null}`);
        }else{
            previousSave = {
                status:"Loading status ...",
                timeStamp: null
            };
        }
        try {
            if (previousSave?.timeStamp == null || Date.now() > previousSave.timeStamp + cacheExpiry) {
                shouldFetchStatus = true;
            }
        } catch (error) {
            console.error(error);
            shouldFetchStatus = true;
        }
        if (shouldFetchStatus) {
            fetchStatus().then((s) => {
                setStatus(s);
                const newState = JSON.stringify({
                    status: s,
                    timeStamp: Date.now(),
                })
                localStorage.setItem('footerStatusCache', newState);
            });
        }else{
            setStatus(previousSave.status);
        }
    }, []);

    let statusColor = "";
    if (status === "All systems operational") {
        statusColor = "bg-green-500";
    } else if (status === "Some systems are down") {
        statusColor = "bg-yellow-500";
    } else {
        statusColor = "bg-red-500";
    }
    return (
        <a href="https://status.iith.dev" target="_blank">
            <div className="flex gap-2 justify-center sm:justify-end items-center" >
                <span className="relative flex h-3 w-3">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${statusColor}`} />
                    <span
                        className={`relative inline-flex rounded-full h-3 w-3 ${statusColor}`}
                    />
                </span>
                {status}
            </div>
        </a>
    )
}
export function BackToTopButton() {
    return (
        <button
            id="back-to-top"
            aria-label="Back to top of page"
            className="group flex w-fit p-1.5 gap-1.5 text-sm items-center border rounded hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out hover:cursor-pointer"
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-current group-hover:stroke-black group-hover:dark:stroke-white rotate-90"
            >
                <line
                    x1="19"
                    y1="12"
                    x2="5"
                    y2="12"
                    className="scale-x-0 group-hover:scale-x-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 ease-in-out"
                />
                <polyline
                    points="12 19 5 12 12 5"
                    className="translate-x-1 group-hover:translate-x-0 transition-all duration-300 ease-in-out"
                />
            </svg>
            <div className="w-full group-hover:text-black group-hover:dark:text-white transition-colors duration-300 ease-in-out">
                Back to top
            </div>
        </button>
    )
}
async function fetchStatus(): Promise<string> {
    try {
        const response = await fetch(
            "https://api.pulsetic.com/public/status/status.iith.dev",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ password: null }),
                // prevent caching if you want live status
                cache: "force-cache",
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { data } = await response.json();
        const monitors = data?.monitors;

        if (monitors && monitors.length > 0) {
            const allMonitorsUp = monitors.every(
                (monitor: { status: string }) => monitor.status === "online"
            );

            return allMonitorsUp
                ? "All systems operational"
                : "Some systems are down";
        } else {
            return "No monitors found.";
        }
    } catch (error) {
        console.error("Error fetching status:", error);
        return "Error retrieving status.";
    }
}