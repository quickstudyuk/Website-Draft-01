'use client';

import { useState, useEffect } from 'react';

export interface DiagnosticResult {
  urgencyLevel: 'High' | 'Moderate' | 'Monitored';
  urgencyColor: string;
  urgencyBg: string;
  riskScore: number;
  confidenceGap: number;
  improvementPotential: number;
  sessionsPerWeek: number;
  sessionDuration: string;
  timeframe: string;
  keyFindings: string[];
  recommendation: string;
  gradeTarget: string;
}

let currentResult: DiagnosticResult | null = null;
const listeners = new Set<(val: DiagnosticResult | null) => void>();

// Modal control state shared globally on client
let modalOpen = false;
const modalListeners = new Set<(val: boolean) => void>();

export function setLearningProfileResult(result: DiagnosticResult | null) {
  currentResult = result;
  listeners.forEach(listener => listener(result));
  
  if (typeof window !== 'undefined') {
    if (result) {
      localStorage.setItem('qs_learning_profile_result', JSON.stringify(result));
    } else {
      localStorage.removeItem('qs_learning_profile_result');
    }
  }
}

export function getLearningProfileResult(): DiagnosticResult | null {
  if (typeof window !== 'undefined' && !currentResult) {
    const cached = localStorage.getItem('qs_learning_profile_result');
    if (cached) {
      try {
        currentResult = JSON.parse(cached);
      } catch (e) {
        localStorage.removeItem('qs_learning_profile_result');
      }
    }
  }
  return currentResult;
}

export function useLearningProfileResult() {
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  useEffect(() => {
    // Initial load
    setResult(getLearningProfileResult());

    const listener = (val: DiagnosticResult | null) => setResult(val);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  return result;
}

export function setDiagnosticModalOpen(open: boolean) {
  modalOpen = open;
  modalListeners.forEach(listener => listener(open));
}

export function getDiagnosticModalOpen(): boolean {
  return modalOpen;
}

export function useDiagnosticModalOpen() {
  const [isOpen, setIsOpen] = useState(modalOpen);

  useEffect(() => {
    const listener = (val: boolean) => setIsOpen(val);
    modalListeners.add(listener);
    return () => {
      modalListeners.delete(listener);
    };
  }, []);

  return isOpen;
}
